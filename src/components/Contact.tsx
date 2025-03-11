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
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you. Reach out through any of the methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
        <motion.div 
      className="bg-white rounded-xl shadow-lg p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold text-purple-800 mb-6 text-center">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
            required
          />
        </div>
        <input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          value={formData.subject} 
          onChange={handleChange} 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
          required
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          value={formData.message} 
          onChange={handleChange} 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
          required
        ></textarea>
        <div className="text-center">
          <Button 
            type="submit" 
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full text-lg shadow-md transition-all duration-300"
          >
            Send Message
          </Button>
        </div>
      </form>
    </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 text-center">
              <MapPin className="mx-auto mb-4 text-purple-700" size={40} />
              <h3 className="text-xl font-bold text-purple-800 mb-2">Our Location</h3>
              <p className="text-gray-600">123 Church Street, Pretoria West, South Africa</p>
            </div>
            <div className="bg-gray-50 p-8 text-center">
              <Phone className="mx-auto mb-4 text-purple-700" size={40} />
              <h3 className="text-xl font-bold text-purple-800 mb-2">Phone Contact</h3>
              <p className="text-gray-600">Office: +27 12 345 6789</p>
              <p className="text-gray-600">Secretary: +27 12 345 6780</p>
            </div>
            <div className="bg-gray-50 p-8 text-center">
              <Mail className="mx-auto mb-4 text-purple-700" size={40} />
              <h3 className="text-xl font-bold text-purple-800 mb-2">Email Us</h3>
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
