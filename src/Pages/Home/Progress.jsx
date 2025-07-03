import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

 const Progress = ({processStepsData}) => {
  return (
        <>
              <section className="bg-gray-600/30 text-white py-20 px-4 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-amber-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From booking to delivery, we ensure a seamless experience so you can focus on enjoying your moments.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {processStepsData.map((step, i) => (
              //  const Icon = step.icon;
              <motion.div
                key={step.title}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-1/5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{ <step.icon className="w-10 h-10 text-amber-400" />}</div>
                <h3 className="text-lg font-semibold mb-2 text-amber-300">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Process Section 2*/}

      <section className="w-full">
        <div className="bg-gradient-to-b from-white0 to-gray-500/20 h-full py-10 relative pl-4">
        
      <div className="grid lg:grid-cols-[30%_40%_30%] gap-10 sm:p-4 sm:justify-center w-full sm:w-[50%] lg:w-[85%] m-auto  ">

         <div id='center-circle' className="flex items-center justify-center order-1 lg:order-2 relative">
        <div 
          className="font-semibold text-white rounded-full w-[300px] h-[300px] xl:w-[460px] xl:h-[460px] flex items-center justify-center flex-col bg-cover bg-center relative overflow-hidden"
       style={{
          backgroundImage: `url('https://res.cloudinary.com/djeorsh5d/image/upload/v1751332865/921bbdf3-0f69-466c-bd5d-c384bedef79f.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(17,24,39,0.8)' // gray-900/80
        }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          <p className='relative text-lg w-[60%] mb-4 text-white text-center'>Ready to capture your moments?</p>
            <Link to="/contact">
          <motion.button
            animate={{ 
              scale: [1, 1.1, 1], 
              opacity: [1, 0.9, 1],
              rotate: [-2, 2, -2],
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.8, 
              ease: 'easeInOut',
            }}
            className="relative bg-amber-500 px-4 py-1 rounded text-lg hover:bg-amber-600 transition-colors duration-300"
          >
            Book Now
          </motion.button>
          </Link>
        </div>
      </div>



        
        <div id='no1' className="xs:hidden flex items-start justify-center flex-col text-white relative lg:p-8 order-2 lg:order-1 w-[300px] sm-size ">
            <div className=" flex items-center justify-center gap-2 ">
                <p className=' p-0.5 px-2 text-[.6rem] lg:text-sm text-gray-300/70 rounded-xl bg-gray-500/20'>01</p>
                <h3 className='font-bold text-[1.3rem] lg:text-4xl'>Book Your Session</h3>
            </div>
         
            <p className=' text-[1.2rem] lg:text-[1.2rem] font-semibold mt-4 lg:mt-20'>Start Your Journey</p>

             
            <p className='lg:text-[.9rem] text-[.8rem] text-gray-400 lg:mt-2 mt-1'>Choose your package and reach out via our contact page to secure your booking with ease.</p>

               <div className="xl:top-10 lg:top-0 left-20 absolute hidden lg:block bg-ambr-50/10 w-72 h-40 ">
               <img src="https://res.cloudinary.com/djeorsh5d/image/upload/v1751247131/bg-high-1_gm00hb.png" className=' w-full h-full ' alt="" />
            </div>
        </div>

    

        <div id='no2' className="flex items-start justify-center flex-col text-white relative lg:p-8 order-3 lg:order-3 w-[300px] bg-ambr-50/10 sm-size mt-5">
            <div className=" flex items-center justify-center gap-2 ">
                <p className=' p-0.5 px-2 text-[.6rem] lg:text-sm text-gray-300/70 rounded-xl bg-gray-500/20'>02</p>
                <h3 className='font-bold text-[1.3rem] lg:text-4xl'>Schedule the Shoot</h3>
            </div>
            <p className=' text-[1.2rem] lg:text-[1.2rem] font-semibold mt-4 lg:mt-20'>Plan Your Moment</p>
            <p className='lg:text-[.9rem] text-[.8rem] text-gray-400 lg:mt-2 mt-1'>We’ll coordinate with you to set a date, time, and location that perfectly suits your needs.</p>

            <div className="xl:top-10 lg:top-0 -left-20 absolute hidden lg:block bg-ambr-50/10 w-72 h-40 ">
               <img src="https://res.cloudinary.com/djeorsh5d/image/upload/v1751247127/bg-2_xvct63.png" className=' w-full h-full ' alt="" />
            </div>
        </div>

      </div>


      <div className=" flex flex-col mt-10 sm:justify-center sm:items-center  lg:w-[80%] m-auto relative ">

        <img src="/src/assets/Process_bg/final.png" className='hidden lg:block' alt="" />

         <div className="flex lg:items-center  justify-center flex-col text-white lg:text-center lg:w-[30rem] sm:m-auto w-[300px] sm-size ">
            <div className=" flex items-center justify-cente gap-2 ">
                <p className=' p-0.5 px-2 text-[.6rem] lg:text-sm text-gray-300/70 rounded-xl bg-gray-500/20'>03</p>
                <h3 className='font-bold text-[1.3rem] lg:text-4xl'>Photo Shoot Day</h3>
            </div>
            <p className='text-[1.2rem] lg:text-[1.2rem] font-semibold mt-4 lg:mt-20'>Capture the Magic</p>
            <p className='lg:text-[.9rem] text-[.8rem] text-gray-400 lg:mt-2 mt-1'>Our professional photographers will capture your moments with care and creativity.</p>
        </div>
      </div>

      <img src="https://res.cloudinary.com/djeorsh5d/image/upload/v1751247131/final_aexpmd.png" className='absolute top-64 right-10 sm:right-40 lg:hidden sm-pos' alt="" />
        </div>
       
      </section>
</>
  )
}


export default Progress;