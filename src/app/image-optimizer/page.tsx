"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [optimizedImage, setOptimizedImage] = useState<string | null>(null);
  const [isOptimizing, setIsOptimizing] = useState<boolean>(false);

  // Handle file upload
  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => setImage(e.target?.result as string);
        reader.readAsDataURL(file);
      }
    },
    []
  );

  // Optimize image
  const optimizeImage = useCallback((): void => {
    if (!image) return;

    setIsOptimizing(true);
    const img = new Image();
    img.src = image;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        console.error("Failed to get canvas context");
        setIsOptimizing(false);
        return;
      }

      // Set canvas size to image dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Optimize the image quality
      const optimized = canvas.toDataURL("image/jpeg", 0.8);
      setOptimizedImage(optimized);
      setIsOptimizing(false);
    };
  }, [image]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <motion.h1
        className="text-4xl font-bold mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Image Optimizer
      </motion.h1>

      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <label
          htmlFor="file-upload"
          className="block w-full cursor-pointer bg-blue-500 text-white py-3 px-4 rounded-lg text-center hover:bg-blue-600 transition duration-300 mb-4"
        >
          Choose an Image
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
        <button
          onClick={optimizeImage}
          disabled={!image || isOptimizing}
          className={`w-full py-3 px-4 rounded-lg text-white transition duration-300 ${
            !image || isOptimizing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isOptimizing ? "Optimizing..." : "Optimize Image"}
        </button>
      </motion.div>

      {image && (
        <motion.div
          className="mt-8 bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Original Image
          </h2>
          <img
            src={image}
            alt="Uploaded"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>
      )}

      {optimizedImage && (
        <motion.div
          className="mt-8 bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Optimized Image
          </h2>
          <img
            src={optimizedImage}
            alt="Optimized"
            className="max-w-full h-auto rounded-lg shadow-md mb-4"
          />
          <a
            href={optimizedImage}
            download="optimized-image.jpg"
            className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Download Optimized Image
          </a>
        </motion.div>
      )}
    </div>
  );
}
