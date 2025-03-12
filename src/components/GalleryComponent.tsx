import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; 
import Gallery from './Gallery'; 

const GalleryComponent = () => {
  // Using the `useInView` hook to track visibility of the component
  const { ref, inView } = useInView({
    triggerOnce: false,  // Keep watching the element even after it's in view
    threshold: 0.2,      // Trigger when 20% of the element is in view
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 md:ml-16 overflow-hidden">
      {/* Left Section */}
      <motion.div
        className="md:w-1/2 md:ml-10 md:mb-20"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-blue-700 text-3xl sm:text-4xl md:text-4xl font-bold tracking-wide mb-4 text-center md:text-left">
          Experience Our Fellowship
        </h1>
        <div className="w-20 h-1 bg-green-500 mx-auto md:mx-0"></div>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-lg font-roboto mx-auto md:mx-0">
          Join us in celebrating faith, unity, and service. Discover moments of worship, compassion, and community growth.
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-1/2 flex justify-center items-center px-6 md:px-10"
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        ref={ref} // Attach the `ref` to the container
      >
        <Gallery />
      </motion.div>
    </div>
  );
};

export default GalleryComponent;
