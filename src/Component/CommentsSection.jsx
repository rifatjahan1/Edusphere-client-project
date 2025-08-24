import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Auth/AuthContext';

const CommentsSection = ({ articleId }) => {
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchComments() {
            try {
                const res = await fetch(`http://localhost:3000/comments/${articleId}`);
                if (!res.ok) throw new Error('Failed to load comments');
                const data = await res.json();
                setComments(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchComments();
    }, [articleId]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return;

        const form = e.target;
        const formData = new FormData(form);
        //console.log(formData)
        const { comment } = Object.fromEntries(formData.entries());

        if (!comment.trim()) return;

        const newComment = {
            article_id: articleId,
            user_id: user.uid,
            user_name: user.displayName,
            user_photo: user.photoURL,
            comment: comment.trim(),
            user_email: user.email, 
        };
        console.log('user.photoURL:', user.photoURL);


        try {
            const res = await fetch('http://localhost:3000/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComment),
            });
            if (!res.ok) throw new Error('Failed to post comment');
            const savedComment = await res.json();

            setComments([savedComment, ...comments]);
            form.reset();  // Clear the form after successful submission
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Comments ({comments.length})</h2>

            {user ? (
                <form onSubmit={handleSubmit} className="mb-6">
                    <textarea
                        name="comment"
                        rows="3"
                        placeholder="Write a comment..."
                        className="w-full border rounded-md p-3 mb-2"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Post Comment
                    </button>
                </form>
            ) : (
                <p className="text-gray-500">Please log in to post a comment.</p>
            )}

            {loading ? (
                <p>Loading comments...</p>
            ) : comments.length === 0 ? (
                <p className="text-gray-400">No comments yet.</p>
            ) : (
                <ul className="space-y-4">
                    {comments.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 border-b pb-3">
                            {c.user_photo && (
                                <img
                                    src={c.user_photo}
                                    alt={c.user_name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            )}

                            <div>
                                <p className="font-semibold">{c.user_photo|| 'Anonymous'}</p>
                                <p className="text-sm">{c.comment}</p>
                                <p className="text-xs text-gray-400">
                                    {new Date(c.createdAt || Date.now()).toLocaleString()}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CommentsSection;