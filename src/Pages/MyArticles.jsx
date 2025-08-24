import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Auth/AuthContext';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';



const MyArticles = () => {
  const { user } = useContext(AuthContext);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch user's articles
  // const fetchMyArticles = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //      if (!token || !user?.email) {
  //      // console.log('Missing token or user email');
  //       return;
  //     }
  //     const res = await axios.get(`http://localhost:3000/myArticles?authorEmail=${user.email}`   ,{
  //       headers:{
  //          Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setArticles(res.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching articles', error);
  //     setLoading(false);
  //   }
  // };

  // Without JWT token
const fetchMyArticles = async () => {
  try {
    if (!user?.email) {
      // console.log('Missing user email');
      return;
    }
    const res = await axios.get(
      `http://localhost:3000/myArticles?authorEmail=${user.email}`
    );
    setArticles(res.data);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching articles', error);
    setLoading(false);
  }
};


  useEffect(() => {
    if (user?.email) fetchMyArticles();
  }, [user]);

  // Delete article
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this article?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:3000/articles/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire('Deleted!', 'Your article has been deleted.', 'success');
          fetchMyArticles();
        }
      } catch (error) {
        Swal.fire('Error', 'Failed to delete article.', 'error');
      }
    }
  };

  // Open update modal
  const openUpdateModal = (article) => {
    setEditingArticle(article);
    setEditModalOpen(true);
  };

  // Handle update submit
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedArticle = {
      title: form.title.value,
      content: form.content.value,
      category: form.category.value,
      tags: form.tags.value.split(',').map(tag => tag.trim()),
      thumbnail: form.thumbnail.value,
      date: form.date.value
    };

    try {
      await axios.put(`http://localhost:3000/articles/${editingArticle._id}`, updatedArticle);
      setEditModalOpen(false);
      fetchMyArticles();
      Swal.fire('Updated!', 'Article updated successfully.', 'success');
    } catch (err) {
      Swal.fire('Error', 'Failed to update article.', 'error');
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">My Articles</h2>

      {articles.length === 0 ? (
        <div className="text-center">
          <p>No articles found.</p>
          <button onClick={() => navigate('/postArticles')} className="btn btn-primary mt-4">
            Post New Article
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Tags</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article._id}>
                  <td>{article.title}</td>
                  <td>{article.category}</td>
                  <td>{article.tags?.join(', ')}</td>
                  <td>{article.date}</td>
                  
                  
                  <td className="flex gap-2">
                    <button
                      onClick={() => openUpdateModal(article)}
                      className="bg-cyan-500 text-white px-2 py-1 rounded hover:bg-cyan-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(article._id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Update Modal */}
      {editModalOpen && editingArticle && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md relative">
            <button
              onClick={() => setEditModalOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Update Article</h2>
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                type="text"
                name="title"
                defaultValue={editingArticle.title}
                placeholder="Title"
                className="w-full border p-2"
                required
              />
              <textarea
                name="content"
                defaultValue={editingArticle.content}
                placeholder="Content"
                className="w-full border p-2"
                required
              />
              <input
                type="text"
                name="category"
                defaultValue={editingArticle.category}
                placeholder="Category"
                className="w-full border p-2"
              />
              <input
                type="text"
                name="tags"
                defaultValue={editingArticle.tags?.join(', ')}
                placeholder="Tags (comma-separated)"
                className="w-full border p-2"
              />
              <input
                type="text"
                name="thumbnail"
                defaultValue={editingArticle.thumbnail}
                placeholder="Thumbnail URL"
                className="w-full border p-2"
              />
              <input
                type="date"
                name="date"
                defaultValue={editingArticle.date}
                className="w-full border p-2"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArticles;
