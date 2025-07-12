import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Video, Palette, Users, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="relative bg-gray-900 rounded-xl overflow-hidden mb-16"
          style={{
            backgroundImage: 'ur[](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 p-12 text-center">
            <motion.h1
              className="text-5xl font-bold text-amber-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About Dkshotit Photography & Studio
            </motion.h1>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Founded in 2017 in Kumasi, Ghana, Dkshotit Photography & Studio is a premier hub for capturing life’s moments and training the next generation of creatives.
            </motion.p>
          </div>
        </motion.div>

        {/* Founder Story */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 90 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-amber-300 mb-6 text-center">The Founder’s Vision</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <motion.img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
              alt="Founder of Dkshotit"
              className="w-72 h-72 object-cover rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            />
            <div className="text-left">
              <p className="text-gray-400 text-lg">
                Meet David Kofi, the heart behind Dkshotit. With over a decade of experience in photography and videography, he founded the studio to blend artistic excellence with education. His mission? To empower talents in Kumasi and beyond with skills for weddings, events, and commercial shoots.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, type: 'spring', stiffness: 90 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-amber-300 mb-6 text-center">Our Services & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Camera, title: 'Wedding Photography', desc: 'Timeless captures of your big day.' },
              { icon: Video, title: 'Videography', desc: 'Cinematic event recordings.' },
              { icon: Palette, title: 'Makeup Training', desc: 'Professional styling courses.' },
              { icon: Camera, title: 'Photography Training', desc: 'Master techniques for all genres.' },
              { icon: Users, title: 'Workshops', desc: 'Hands-on skill-building sessions.' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <service.icon className="w-12 h-12 text-amber-400 mb-4 mx-auto" />
                <h3 className="text-amber-300 mb-2 text-center">{service.title}</h3>
                <p className="text-gray-400 text-center">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, type: 'spring', stiffness: 90 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-amber-300 mb-6 text-center">Our Talented Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'David Kofi', role: 'Founder & Lead Photographer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop' },
              { name: 'Ama Mensah', role: 'Senior Videographer', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' },
              { name: 'Kwame Adom', role: 'Training Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={member.img} alt={member.name} className="w-full h-48 object-cover rounded-t-xl mb-4" />
                <h3 className="text-amber-300 mb-1 text-center">{member.name}</h3>
                <p className="text-gray-400 text-center">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, type: 'spring', stiffness: 90 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-amber-300 mb-6 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Efua Asante', text: 'David’s wedding photos are breathtaking—pure magic!' },
              { name: 'Kofi Osei', text: 'The training workshops transformed my skills completely.' },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-400 italic mb-2">“{testimonial.text}”</p>
                <p className="text-amber-300 font-medium text-center">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6, type: 'spring', stiffness: 90 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-amber-300 mb-6 text-center">Get in Touch</h2>
          <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-xl shadow-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 h-24"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-amber-500 px-6 py-3 rounded-lg hover:bg-amber-600 transition duration-300 text-white"
              >
                <Mail className="w-5 h-5 inline mr-2" /> Send Message
              </button>
            </form>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <Link to="/training">
            <button className="bg-amber-500 px-8 py-3 rounded-lg text-lg hover:bg-amber-600 transition duration-300">
              Join Our Training Programs
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;