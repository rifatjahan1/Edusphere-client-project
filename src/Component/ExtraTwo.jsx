import React from 'react';
import { motion } from "framer-motion";


const ExtraOne = () => {
      const chefs = [
 {
    id: 1,
    
    img: 'https://i.ibb.co/LBdhxQf/author-6913213.jpg',
    name: 'Anna David',
    description: 'A is an educator turned writer who focuses on educational reform.',
    awards: '8 awards',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/HLNRCVZ2/author-8095464-640.jpg',
    name: 'John Bruck',
    description: 'John Bruck is a technology enthusiast and freelance writer who explores the latest trends. ',
    awards: '15 awards',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/zh0VJVPQ/author-8451051-640.jpg',
    name: 'Kathrin Rozario',
    description: 'Kathrin is a lifestyle blogger passionate about mental wellness, sustainable living, and personal growth.',
    awards: '9 awards',
  },
 
];
    return (
          <div className='lg:my-20'>
      <h1 className='text-3xl text-center font-semibold mb-8'> Our Top Author</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {chefs.map((chef) => (
          <motion.div
            key={chef.id}
            className="flex flex-col items-center justify-center rounded-lg shadow hover:shadow-lg overflow-hidden bg-white"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img
              src={chef.img}
              alt={chef.name}
              className="w-full h-64 object-cover transform duration-300"
            />

            <motion.div
              className="p-4 space-y-2 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-lg font-semibold">{chef.name}</h3>
              <p className="text-sm text-gray-600">{chef.description}</p>
              <p className="text-sm font-medium text-purple-500">
                Awards: {chef.awards}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
    );
};

export default ExtraOne;