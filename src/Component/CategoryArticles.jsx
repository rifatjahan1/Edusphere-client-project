import React from 'react';
import CategoryArticleCard from './CategoryArticleCard';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const CategoryArticles = () => {
    const articles = useLoaderData();
    const { category } = useParams();
     const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto px-4 py-6 mt-8">
            <button
                className="btn text-white bg-cyan-500 "
                onClick={() => navigate('/')}
            >
                Back Home
            </button>
            <h2 className="text-2xl my-6 lg:text-4xl font-bold  text-center text-blue-500">
                Articles in "{category}"
            </h2>
            {articles.length === 0 ? (
                <p className="text-center text-gray-500">No articles found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map(article => (
                        <CategoryArticleCard  key={article._id} article={article}></CategoryArticleCard>

                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryArticles;
