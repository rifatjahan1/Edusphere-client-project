import React from 'react';
import { Link} from 'react-router';

const TopCardDataHome = ({ article }) => {
    return (
        <>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left">
    <div className="flex items-center space-x-3 mb-4">
        <img
            src={article.AuthorPhoto}
            alt={article.author}
            className="w-10 h-10 border border-gray-300 rounded-full object-cover"
        />
        <span className="font-medium text-gray-800">{article.authoreName}</span>
    </div>

    <h2 className="text-xl font-semibold mb-2 text-gray-800">{article.title}</h2>
    <p className="text-gray-600 text-sm mb-3">{article.content}</p>
    <div className="text-gray-500 text-xs mb-4">
        <span>{article.date}</span>
    </div>

    <Link to={`/articleDetails/${article._id}`}>
        <button className="border-b border-blue-600 text-black hover:bg-cyan-500 hover:text-white hover:border-0 px-2 py-1">
            Read More
        </button>
    </Link>
</div>

        </>
    );
};

export default TopCardDataHome;