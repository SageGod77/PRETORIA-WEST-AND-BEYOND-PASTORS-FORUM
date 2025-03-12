import { Church, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-200 pt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 pb-8">
          {/* Logo and About Section */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="/logo2.png" className="w-11 h-11 mr-3" alt="Logo" />
              <p className="text-white text-lg font-semibold">PRETORIA WEST AND BEYOND PASTORS FORUM</p>
            </div>
            <p className="mb-6 text-sm">
              Uniting spiritual leaders to foster community growth and faith development throughout Pretoria West and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#pastors" className="hover:text-gold-400 transition-colors">Leadership</a></li>
              <li><a href="#events" className="hover:text-gold-400 transition-colors">Events</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Sermons</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Pastor Support</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Community Outreach</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Prayer Requests</a></li>
            </ul>
          </div>

          {/* Optional Church Section */}
          <div className="hidden md:block">
            <h3 className="text-xl font-bold mb-6 text-white">Our Church</h3>
            <div className="flex items-center space-x-3">
              <Church size={30} className="text-gray-300" />
              <span className="text-white text-sm">Join our community today.</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-purple-800 py-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Pretoria West and Beyond Pastors Forum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
