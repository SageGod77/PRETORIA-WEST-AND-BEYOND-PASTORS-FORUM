import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const images = ['/imgs/tm-img-01.jpg', '/imgs/tm-img-02.jpg', '/imgs/tm-img-03.jpg'];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="container-custom relative py-24 md:py-32">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-4xl md:text-6xl text-white font-bold mb-6 leading-tight"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              PRETORIA WEST AND BEYOND <span className="text-blue-700">PASTORS FORUM</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial="hidden"
              variants={fadeIn}
              animate="visible"
            >
              Uniting spiritual leaders to foster community growth and faith development
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button className="btn-secondary md:h-12 md:w-48 bg-blue-700">Learn More</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
