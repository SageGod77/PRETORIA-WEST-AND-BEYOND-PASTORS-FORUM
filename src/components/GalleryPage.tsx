import React from 'react';
import Gallery from '@/components/Gallery';
import { motion } from 'framer-motion';

function GalleryPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <motion.h1
        className="text-5xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 md:mr-[1160px]">Gallery</h2>
          <div className="w-20 h-1 md:mr-[1200px] bg-green-500 mx-auto"></div>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Gallery />
      </motion.div>
    </div>
  );
}

export default GalleryPage;
