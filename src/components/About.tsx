import { Cross, Users, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutWithConstitution = () => {
  // Using `useInView` to track when elements are in view
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 overflow-hidden">
        {/* About Section */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">About Our Forum</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref1}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView1 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Pretoria West and Beyond Pastors Forum was established to unite spiritual leaders across denominations, 
              creating a collaborative network focused on strengthening our community through faith, service, and cooperation.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide support, resources, and fellowship opportunities for pastors, promoting unity in Christ while respecting 
              our diverse traditions and approaches to ministry.
            </p>
          </motion.div>

          <motion.div className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={inView1 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <video
                src="/video/vid-1.mp4"
                className="w-full h-auto max-w-full object-cover"
                controls
                autoPlay
                loop
                muted
              />
            </div>
          </motion.div>
        </div>

        {/* Constitution Section */}
        <div className="mt-16" ref={ref2}>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
            Pretoria West and Beyond Pastors Forum Constitution
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-lg text-gray-700">
            <p><strong>1. Definition of the Entity:</strong> The "Forum" refers to PRETORIA WEST AND BEYOND PASTORS FORUM. "Members" are Pastors and their churches, duly approved as members of the Forum by its leadership.</p>
            <p><strong>2. The Name of the Forum:</strong> The Forum is officially named PRETORIA WEST AND BEYOND PASTORS FORUM, shortened as PTAWPF.</p>
            <p><strong>3. Preamble:</strong> The Pretoria West Pastors Forum unites pastors in the City of Tshwane, glorifying God through unity, ministry, and service.</p>
            <p><strong>4. Physical and Postal Addresses:</strong> Postal Address: P.O. Box 19286, Pretoria West, 0117. Physical Address: c/o VEK Jubal Congregation, Kwaggasrand, Pretoria, 0183.</p>
          </motion.div>
          </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20" ref={ref3}>
          <motion.div className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={inView3 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <video
                src="/video/vid-2.mp4"
                className="w-full h-auto max-w-full object-cover"
                controls
                autoPlay
                loop
                muted
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView3 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              PREAMBLE: To provide for the constitution of the Pretoria West and Beyond Pastors Forum; to promote and build a culture of unity and peace amongst the Pretoria West pastors, churches and communities; to give support and encouragement to church leaders to set and uphold biblical standards; to stimulate development that will enhance effectiveness in ministry and surrounding communities.
            </p>
          </motion.div>
        </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mt-20" ref={ref3}>
          <motion.div className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={inView3 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <video
                src="/video/vid-3..mp4"
                className="w-full h-auto max-w-full object-cover"
                controls
                autoPlay
                loop
                muted
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView3 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              PREAMBLE: Ten years ago, this forum began as a small vision — a place where faith, love, and community could grow together. Today, we celebrate a decade of God’s grace, countless lives touched, and a family that has only grown stronger. Join us as we look back on the journey, the milestones, and the testimonies that have brought us here… and look forward to the new chapter God is writing for us.
            </p>
          </motion.div>
      </div>
    </section>
  );
};

export default AboutWithConstitution;
