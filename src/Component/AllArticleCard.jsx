import React from 'react';
import { Link } from 'react-router';

const AllArticleCard = ({ article }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-5 flex flex-col justify-between text-left hover:shadow-lg transition">
            <div>
                <div className="flex items-center space-x-3">
                    <img
                        src={article.AuthorPhoto}
                        alt={article.author}
                        className="w-10 h-10 border border-gray-300 rounded-full object-cover mb-2"
                    />

                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{article.title}</h3>
                <p className="text-gray-700 text-sm mb-1">
                    <strong>Author:</strong> {article.authoreName}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                    <strong>Date:</strong> {new Date(article.date).toLocaleDateString()}
                </p>
            </div>
            <div>
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

export default AllArticleCard;