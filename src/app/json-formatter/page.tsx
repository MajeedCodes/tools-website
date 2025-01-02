"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy, FiCheck, FiAlertCircle } from "react-icons/fi";

export default function JSONFormatter() {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const pretty = JSON.stringify(parsed, null, 2);
      setFormattedJson(pretty);
      setError(null);
    } catch (e) {
      setFormattedJson(null);
      setError("Invalid JSON input. Please check your data.");
    }
  };

  const handleCopy = () => {
    if (formattedJson) {
      navigator.clipboard.writeText(formattedJson);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          JSON Formatter
        </h1>
        <div className="mb-6">
          <textarea
            className="w-full h-48 p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none"
            placeholder="Paste your JSON here..."
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={formatJSON}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Format JSON
          </motion.button>
        </div>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-2 mb-4 p-3 bg-red-100 text-red-700 rounded-lg"
            >
              <FiAlertCircle className="text-xl" />
              <p className="text-sm font-semibold">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {formattedJson && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-700">
                  Formatted JSON:
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="flex items-center space-x-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300"
                >
                  {isCopied ? (
                    <FiCheck className="text-green-600" />
                  ) : (
                    <FiCopy />
                  )}
                  <span>{isCopied ? "Copied!" : "Copy"}</span>
                </motion.button>
              </div>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 overflow-auto max-h-96 whitespace-pre-wrap">
                {formattedJson}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

