"use client"

import { useState } from 'react'
import { FiCopy, FiRefreshCw, FiLock, FiUnlock } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [encodedText, setEncodedText] = useState('')
  const [decodedText, setDecodedText] = useState('')

  const encodeToBase64 = () => {
    try {
      const encoded = btoa(inputText)
      setEncodedText(encoded)
    } catch (error) {
      alert('Error encoding text. Please check your input.')
    }
  }

  const decodeFromBase64 = () => {
    try {
      const decoded = atob(inputText)
      setDecodedText(decoded)
    } catch (error) {
      alert('Error decoding text. Please ensure valid Base64 input.')
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  const clearFields = () => {
    setInputText('')
    setEncodedText('')
    setDecodedText('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br   to-red-500 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-8">
          Base64 Encoder/Decoder
        </h1>
        
        <div className="relative mb-6">
          <textarea
            className="w-full h-40 p-4 border-2 border-gray-100 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition duration-300 ease-in-out"
            placeholder="Enter text or Base64 here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="absolute bottom-6 right-4 text-gray-400">
            {inputText.length} characters
          </div>
        </div>
        
        <div className="flex space-x-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={encodeToBase64}
            className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg"
          >
            <div className="flex items-center justify-center">
              <FiLock className="mr-2" />
              Encode to Base64
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={decodeFromBase64}
            className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 shadow-lg"
          >
            <div className="flex items-center justify-center">
              <FiUnlock className="mr-2" />
              Decode from Base64
            </div>
          </motion.button>
        </div>

        {encodedText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Encoded Text:</h2>
            <div className="flex items-center bg-gray-100 p-4 rounded-xl">
              <p className="flex-1 break-all text-gray-700">{encodedText}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => copyToClipboard(encodedText)}
                className="ml-2 text-purple-600 hover:text-purple-800 transition duration-300"
              >
                <FiCopy size={20} />
              </motion.button>
            </div>
          </motion.div>
        )}

        {decodedText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Decoded Text:</h2>
            <div className="flex items-center bg-gray-100 p-4 rounded-xl">
              <p className="flex-1 break-all text-gray-700">{decodedText}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => copyToClipboard(decodedText)}
                className="ml-2 text-pink-600 hover:text-pink-800 transition duration-300"
              >
                <FiCopy size={20} />
              </motion.button>
            </div>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={clearFields}
          className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow-lg flex items-center justify-center"
        >
          <FiRefreshCw className="mr-2" /> Clear All
        </motion.button>
      </motion.div>
    </div>
  )
}

