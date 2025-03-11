import Gallery from './Gallery'; // Assuming the Gallery component is imported here

const GalleryComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 md:ml-16">
      {/* Left Section */}
      <div className="animate-slide-in-right md:w-1/2 md:ml-10 md:mb-20">
  <h1 className="text-blue-700 text-4xl sm:text-5xl md:text-4xl font-bold tracking-wide mb-4">
    Experience Our Fellowship
  </h1>
  <div className="w-20 h-1 md:mr-[1200px] bg-green-500 mx-auto"></div>
  <br/>
  <p className="text-base sm:text-lg md:text-xl mb-6 max-w-lg font-roboto">
    Join us in celebrating faith, unity, and service. Discover moments of worship, compassion, and community growth.
  </p>
</div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center items-center px-6 md:px-10">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryComponent;
