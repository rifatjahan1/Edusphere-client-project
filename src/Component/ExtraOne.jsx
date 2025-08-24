import React from 'react';
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const ExtraTwo = () => {
    return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse group">

        {/* Animated Image */}
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x:100 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="lg:max-w-sm rounded-lg shadow-2xl"
        >
          <img
            src="https://i.ibb.co/ch0P6vZ4/rsz-pexels-mart-production-7550298.jpg"
            className="rounded-lg w-full"
            alt="Education Benefits"
          />
        </motion.div>

        {/* Text Content */}
        <div>
          <p className="text-blue-400 mb-4">EDUCATION BENIFITS</p>
          <h1 className="font-bold text-4xl">
            Built On Limitless Learning With Modern Technologies
          </h1>
          <p className="py-6">
            Join to explore a wide range of subjects, collaborate with peers, and engage in dynamic, real-world learning experiences.
          </p>

          {/* Stats Section */}
          <div className="lg:flex">
            <div className="w-48">
              <p className="text-2xl lg:text-7xl text-blue-500">
                <CountUp end={90} duration={2} />%
              </p>
              <h1 className="text-xl mt-4">Success Story</h1>
              <p className="text-sm mt-4">All our sporting events are university calendar</p>
            </div>

            <div className="w-48 lg:ms-8">
              <p className="text-2xl lg:text-7xl text-blue-500">
                <CountUp end={45} duration={2} />%
              </p>
              <h1 className="text-xl mt-4">Winning Awards</h1>
              <p className="text-sm mt-4">All our sporting events are university calendar</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    );
};

export default ExtraTwo;