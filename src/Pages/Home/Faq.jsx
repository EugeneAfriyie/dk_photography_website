import React from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Faq = ({faqsData ,openFaqIndex,setOpenFaqIndex}) => {
     const toggleFaq = (index) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
  
  return (
       <section className="bg-gray-600/20 text-white py-10 sm:py-20 px-4 relative overflow-hidden xl:w-[90%] m-auto mt-40">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516035069371-29a1b244cc49?w=500&auto=format&fit=crop&q=60')`,
            filter: 'blur(5px)',
          }}
          onError={(e) => (e.target.style.backgroundImage = "url('/fallback-lens.jpg')")}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl sm:text-6xl font-bold mb-6 text-amber-400 sm:w-[70%] w-full m-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about our photography services.
          </motion.p>

          <div className=" sm:p-8  shadow-md w-full  mx-auto rounded-lg ">
            {faqsData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 mt-2 first:mt-0 p-4 w-[100%]   rounded-2xl "
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between gap-2 sm:gap-0 items-center py-4 text-left sm:text-lg font-semibold text-amber-300 hover:text-amber-400 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="sm:text-2xl text-amber-400">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 pb-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Faq