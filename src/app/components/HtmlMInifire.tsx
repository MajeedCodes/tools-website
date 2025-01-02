'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { minifyHtml } from '@/app/utils/minifyHtml';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface MinifyStats {
  originalSize: number;
  minifiedSize: number;
}

export default function HtmlMinifier() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [stats, setStats] = useState<MinifyStats>({ originalSize: 0, minifiedSize: 0 });
  const [isMinifying, setIsMinifying] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      setIsMinifying(true);
      try {
        const minified: string = await minifyHtml(input);
        setOutput(minified);
        setStats({ 
          originalSize: input.length, 
          minifiedSize: minified.length 
        });
      } catch (error) {
        console.error('Minification error:', error);
        // Handle error (e.g., show error message to user)
      } finally {
        setIsMinifying(false);
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">HTML Minifier</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="html" className="block text-lg font-medium text-gray-700 mb-2">
              Input HTML
            </label>
            <textarea
              id="html"
              name="html"
              rows={10}
              className="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"
              value={input}
              onChange={handleInputChange}
              placeholder="Paste your HTML here"
            />
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 text-lg font-semibold"
              disabled={isMinifying}
            >
              {isMinifying ? 'Minifying...' : 'Minify HTML'}
            </button>
          </motion.div>
        </form>

        {output && (
          <motion.div 
            className="mt-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800">Minified HTML</h2>
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
              <span>Minified size: {stats.minifiedSize} bytes</span>
              <span className="font-semibold text-green-600">
                Saved: {stats.originalSize > 0 ? ((stats.originalSize - stats.minifiedSize) / stats.originalSize * 100).toFixed(2) : 0}%
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

