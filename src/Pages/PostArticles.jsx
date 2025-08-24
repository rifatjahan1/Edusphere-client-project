import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import AuthContext from '../Auth/AuthContext';
import { useNavigate } from 'react-router';

const PostArticles = () => {
    const { user } = useContext(AuthContext);
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();

    if (!user) {
        return <p className="text-center mt-10">Loading user info...</p>;
    }

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setTags(prev => checked ? [...prev, value] : prev.filter(tag => tag !== value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const articleData = Object.fromEntries(formData.entries());

        articleData.authorEmail = user.email;
        articleData.likedBy = [];
        articleData.tags = tags;

        try {
            const response = await axios.post('http://localhost:3000/articles', articleData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            form.reset();
            setTags([]);
            Swal.fire('Success!', 'Article posted successfully!', 'success');
             navigate('/myArticles');
        } catch (err) {
            Swal.fire('Error', 'Failed to post article.', 'error');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-xl text-blue-600 lg:text-3xl font-bold mb-4 text-center">Post a New Article</h2>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="w-full border p-2"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    readOnly
                    className="w-full border p-2 bg-gray-100"
                    required
                />
                <input
                    type="text"
                    name="UserName"
                    defaultValue={user.displayName || ''}
                    placeholder="User Name"
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    className="w-full border p-2 h-32"
                    required
                />
                <input
                    type="text"
                    name="thumbnail"
                    placeholder="Thumbnail Image URL"
                    className="w-full border p-2"
                />
                <select name="category" className="w-full border p-2" required>
                    <option value="">Select Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Education">Education</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    type="date"
                    name="date"
                    className="w-full border p-2"
                    required
                />
                <div>
                    <label className="font-medium block mb-1">Tags:</label>
                    <div className="flex flex-wrap gap-4">
                        {[
                            'React',
                            'JavaScript',
                            'Literature',
                            'Design',
                            'Physics',
                            'Chemistry',
                            'E-learning',
                            'Teaching',
                            'Gk'
                        ].map(tag => (
                            <label key={tag} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="tags"
                                    value={tag}
                                    checked={tags.includes(tag)}
                                    onChange={handleCheckboxChange}
                                />
                                {tag}
                            </label>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 w-full text-white px-4 py-2 rounded hover:bg-cyan-500"
                >
                    Post Article
                </button>
            </form>
        </div>
    );
};

export default PostArticles;
