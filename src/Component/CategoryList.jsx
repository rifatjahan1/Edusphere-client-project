import React from 'react';
import { useNavigate } from 'react-router';

const CategoryList = () => {
  const navigate = useNavigate();
  const categories = [
    { name: 'Technology', img: 'https://i.ibb.co/sp2DrmmD/rsz-apple-1853259-640.jpg' },
    { name: 'Science', img: 'https://i.ibb.co/5XpmB6YN/rsz-1ai-generated-8458279-640-1.png' },
    { name: 'Arts', img: 'https://i.ibb.co/Ld15pXqK/rsz-pens-1867899-640.jpg' },
    { name: 'Education', img: 'https://i.ibb.co/Zz2qX64w/rsz-books-9601442-640.jpg' },
    { name: 'Other', img: 'https://i.ibb.co/sdRhVxdk/the-periodic-table-4273681-640.jpg' },

  ];

  return (
   <div>
    <h1 className=' text-4xl font-semibold text-center text-blue-500 mt-12 lg:pb-8 '><span className='border-t-2 border-blue-500'>Categories</span></h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 p-8 ">
      {categories.map(({ name, img }) => (
        <div
          key={name}
          className="relative group h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
        >
          {/* Background Image */}
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover transform duration-300 group-hover:scale-110"
          />

          {/* Category Name - visible only when NOT hovered */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="text-white text-2xl font-bold drop-shadow-lg bg-blue-500 bg-opacity-40 px-4 py-2 rounded-lg">
              {name}
            </h3>
          </div>

          {/* Button - visible only when hovered */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 underline decoration-white">
            <button
              onClick={() => navigate(`/category/${name}`)}
              className="bg-cyan-500 text-white px-5 py-2 rounded-lg text-lg  "
            >
             {name}
            </button>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default CategoryList;
