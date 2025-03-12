
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white bg-blend-color-burn shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
        <img src ="/logo.png" className="w-11 h-11 mr-3"/>
        <p className='text-gray-700 text-[15px]'>PRETORIA WEST AND BEYOND PASTORS FORUM</p>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
        <a href="/#hero" className="text-gray-700 hover:text-blue-700 transition-colors">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-700 transition-colors">About</a>
          <a href="/gallerypage" className="text-gray-700 hover:text-blue-700 transition-colors">Gallery</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-700 transition-colors">Contact</a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-purple-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <a href="/#hero" className="text-gray-700 hover:text-blue-700 transition-colors py-2 border-b">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-700 transition-colors py-2 border-b">About</a>
            <a href="/gallerypage" className="text-gray-700 hover:text-blue-700 transition-colors py-2 border-b">Gallery</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-700 transition-colors py-2 border-b">Contact</a>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
