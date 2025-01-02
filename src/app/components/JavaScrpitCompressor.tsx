'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCopy, FiCheck, FiCode, FiFileText } from 'react-icons/fi';
import { compressCode } from '@/app/utils/compressor';

interface Stats {
  originalSize: number;
  compressedSize: number;
}

export default function CodeCompressor() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [stats, setStats] = useState<Stats>({ originalSize: 0, compressedSize: 0 });
  const [type, setType] = useState<'css' | 'js'>('css');
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    setOutput('');
    setStats({ originalSize: 0, compressedSize: 0 });
  }, [type]);

  const handleCompress = async () => {
    setIsCompressing(true);
    try {
      const compressed = await compressCode(input, type);
      setOutput(compressed);
      setStats({
        originalSize: input.length,
        compressedSize: compressed.length,
      });
    } catch (error) {
      console.error('Compression error:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsCompressing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">CSS/JavaScript Compressor</h1>
        <div className="space-y-8">
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => setType('css')}
              className={`px-6 py-3 rounded-lg text-white text-lg font-semibold flex items-center space-x-2 ${
                type === 'css' ? 'bg-blue-600' : 'bg-gray-400'
              } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200`}
            >
              <FiFileText />
              <span>CSS</span>
            </button>
            <button
              onClick={() => setType('js')}
              className={`px-6 py-3 rounded-lg text-white text-lg font-semibold flex items-center space-x-2 ${
                type === 'js' ? 'bg-blue-600' : 'bg-gray-400'
              } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200`}
            >
              <FiCode />
              <span>JavaScript</span>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="code" className="block text-lg font-medium text-gray-700 mb-2">
              Input {type.toUpperCase()}
            </label>
            <textarea
              id="code"
              name="code"
              rows={10}
              className="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Paste your ${type.toUpperCase()} code here`}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={handleCompress}
              disabled={isCompressing || !input.trim()}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCompressing ? 'Compressing...' : 'Compress'}
            </button>
          </motion.div>
          <AnimatePresence>
            {output && (
              <motion.div 
                className="mt-8 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-semibold text-gray-800">Compressed {type.toUpperCase()}</h2>
                <div className="relative">
                  <textarea
                    readOnly
                    rows={10}
                    className="w-full px-4 py-3 text-gray-700 border rounded-lg bg-white resize-none"
                    value={output}
                  />
                  <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-200"
                    title="Copy to clipboard"
                  >
                    {isCopied ? <FiCheck className="text-green-600" /> : <FiCopy />}
                  </button>
                </div>
                <div className="flex justify-between text-sm text-gray-600 bg-white p-4 rounded-lg shadow">
                  <span>Original size: {stats.originalSize} bytes</span>
                  <span>Compressed size: {stats.compressedSize} bytes</span>
                  <span className="font-semibold text-green-600">
                    Saved: {stats.originalSize > 0
                      ? ((stats.originalSize - stats.compressedSize) / stats.originalSize * 100).toFixed(2)
                      : 0}
                    %
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
