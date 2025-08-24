import React, { useContext, useState } from 'react'
import AuthContext from '../Auth/AuthContext';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import CommentsSection from './CommentsSection';

const ArticleDetails = () => {
    const { user } = useContext(AuthContext);
    const loadedArticle = useLoaderData()

    const [article, setArticle] = useState(loadedArticle);
    const isLiked = article.likedBy.includes(user?.uid);

    const handleLike = async () => {
        if (!user) {
            alert('You must be logged in to like this article.');
            return;
        }

        try {
            const res = await axios.patch(`https://edusphere-server-project.vercel.app/articles/${article._id}/like`, {
                userId: user.uid
            });
            setArticle(res.data); // Update article state with new data
        } catch (err) {
            console.error('Failed to like/unlike', err);
        }
    };

    return (
        <div className="mt-8 lg:mt-16 max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
            {article.AuthorPhoto && (
                <img
                    src={article.AuthorPhoto}
                    alt="Thumbnail"
                    className="w-full h-full object-cover rounded mb-6"
                />
            )}

            <div className="flex items-center gap-3 mb-4">
                <span className="font-semibold text-blue-500 text-xl">{article.authoreName}</span>
            </div>

            <h1 className="text-2xl font-bold mb-4 text-gray-800">{article.title}</h1>

            <div className="text-gray-800 leading-relaxed whitespace-pre-line">{article.content}</div>

            <div className="mb-4">
                {(Array.isArray(article.tags) ? article.tags : article.tags?.split(',') || []).map((tag, idx) => (
                    <span key={idx} className="inline-block bg-blue-100 text-purple-500 px-2 py-1 rounded mr-2 text-md mt-4">
                        #{tag.trim()}
                    </span>
                ))}
            </div>

            <div className="text-sm text-gray-500 mb-2">
                <span>Category: {article.category}</span>
                <span className="ml-2">Published: {new Date(article.date).toLocaleDateString()}</span>
            </div>

            <div>
                <p className='text-gray-700'>Likes: {article.likedBy.length}</p>
                <button
                    onClick={handleLike}
                    className={`mt-2 px-4 py-2 rounded ${
                        isLiked ? 'bg-red-500 text-white' : 'bg-gray-500 text-white'
                    }`}
                >
                    {isLiked ? '♥ Liked' : '♡ Like'}
                </button>
            </div>
        
            {/* Comment Section */}
            <CommentsSection  articleId={article._id}></CommentsSection>
            
        </div>
    );
};

export default ArticleDetails;
