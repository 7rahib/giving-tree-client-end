import React from 'react';
import gallery1 from '../../Assets/gallery/gallery1.jpg';
import gallery2 from '../../Assets/gallery/gallery2.jpg';
import gallery3 from '../../Assets/gallery/gallery3.jpg';
import gallery4 from '../../Assets/gallery/gallery4.jpg';
import gallery5 from '../../Assets/gallery/gallery5.jpg';
import gallery6 from '../../Assets/gallery/gallery6.jpg';
import { motion } from 'framer-motion';

const Gallary = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Our recent projects</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-xl"><span className='text-5xl'>"</span>People who help others are happier than people who does not. Helping makes the world happier</p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={gallery1} />
              </motion.div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={gallery2} />
              </motion.div>
            </div>
            <div className="md:p-2 p-1 w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={gallery4} />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={gallery3} />
              </motion.div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={gallery5} />
              </motion.div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={gallery6} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;