import React from 'react';
import { Link } from 'react-router';

const CategoryArticleCard = ({ article }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
           <div className="flex items-center justify-center space-x-3  py-2 rounded">
                    
                        <img
                            src={article.AuthorPhoto}
                            alt={article.Author}
                            className="w-10 h-10  border border-gray-300 rounded-full object-cover"
                        />
                    
                    <div className='text-black'>
                        <span>{article.authorName}</span>
                    </div>
                </div>
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 text-sm mb-3">{article.content}</p>
            <div className="text-gray-500 text-xs">
                 <span>{article.date}</span>
            </div>
            <div className='mt-8'>
                <Link to={`/articleDetails/${article._id}`}>
                    <button
                        // onClick={() => navigate(`/articles/${article._id}`)} // enable if needed
                        className="border-b border-blue-600 text-black  hover:bg-cyan-500 hover:text-white hover:border-0"
                    >
                        Read More
                    </button>
                </Link>
            </div>

        </div>

    );
};

export default CategoryArticleCard;