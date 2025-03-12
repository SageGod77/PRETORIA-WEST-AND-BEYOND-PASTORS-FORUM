import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 md:mr-[1000px]">Contact Us</h2>
        <div className="w-20 h-1 md:mr-[1110px] bg-green-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
        <motion.div 
      className="bg-gray-50 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <form onSubmit={handleSubmit} className="bg-gray-50 p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Send a Message</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you. Reach out through any of the methods below.
          </p>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
             <p className="text-green-500 mt-4"></p>
              <p className="text-red-500 mt-4"></p>
          </form>
    </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 text-center">
              <MapPin className="mx-auto mb-4 text-blue-700" size={40} />
              <h3 className="text-xl font-bold text-blue-700 mb-2">Our Location</h3>
              <p className="text-gray-600">123 Church Street, Pretoria West, South Africa</p>
            </div>
            <div className="bg-gray-50 p-8 text-center">
              <Phone className="mx-auto mb-4 text-blue-700" size={40} />
              <h3 className="text-xl font-bold text-blue-700 mb-2">Phone Contact</h3>
              <p className="text-gray-600">Office: +27 12 345 6789</p>
              <p className="text-gray-600">Secretary: +27 12 345 6780</p>
            </div>
            <div className="bg-gray-50 p-8 text-center">
              <Mail className="mx-auto mb-4 text-blue-700" size={40} />
              <h3 className="text-xl font-bold text-blue-700 mb-2">Email Us</h3>
              <p className="text-gray-600">info@pretoriapastors.org</p>
              <p className="text-gray-600">support@pretoriapastors.org</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
