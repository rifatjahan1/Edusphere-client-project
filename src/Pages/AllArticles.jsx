import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import AllArticleCard from '../Component/AllArticleCard';


const AllArticles = () => {
    const allArticles = useLoaderData(); // Data from loader
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  // Filter articles based on category
  const filteredArticles =
    filter === 'All'
      ? allArticles
      : allArticles.filter(article => article.category === filter);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4 text-blue-500">All Articles</h2>

      <div className="space-y-4 lg:space-y-0 lg:flex justify-between mb-8">
       <div>
         <button
          className="btn bg-cyan-500 text-white"
          onClick={() => navigate('/')}
        >
          Back Home
        </button>
       </div>

        <select
          value={filter}
          onChange={handleFilterChange}
          className="border px-3 py-2 rounded shadow"
        >
          <option value="All">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Science">Science</option>
          <option value="Arts">Arts</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map(article => (
        <AllArticleCard key={article._id} article={article}></AllArticleCard>
            
          
        ))}
      </div>
    </div>
  );
};

export default AllArticles;