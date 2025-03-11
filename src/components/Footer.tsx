
import { Church, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-200 pt-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 pb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Church className="mr-2 text-gold-400" size={28} />
              <span className="font-serif text-2xl font-bold text-white">PWBPF</span>
            </div>
            <p className="mb-6">
              Uniting spiritual leaders to foster community growth and faith development throughout Pretoria West and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#pastors" className="hover:text-gold-400 transition-colors">Leadership</a></li>
              <li><a href="#events" className="hover:text-gold-400 transition-colors">Events</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Sermons</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Pastor Support</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Community Outreach</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Prayer Requests</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Subscribe</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and announcements.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
              />
              <button className="bg-gold-500 hover:bg-gold-600 text-gray-900 font-medium px-4 py-2 rounded-r-md transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-800 py-6 text-center">
          <p>
            &copy; {currentYear} Pretoria West and Beyond Pastors Forum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
