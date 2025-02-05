'use client';
import { useState } from "react";

interface Post {
  id: number;
  title: string;
  description: string;
}

export default function Home() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [savedData, setSavedData] = useState<Post[] | null>(null);
  const [lastPost, setLastPost] = useState<Post | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null); // Track editing post

  const saveData = async () => {
    if (editingPost) {
      await fetch(`http://localhost:3001/post/${editingPost.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      setEditingPost(null);
    } else {
      await fetch("http://localhost:3001/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
    }

    setTitle("");
    setDescription("");

  };

  const fetchData = async (showAllPosts: boolean) => {
    try {
      const url = showAllPosts ? "http://localhost:3001/post" : "http://localhost:3001/post?last=true";
      const res = await fetch(url);
      const data = await res.json();

      if (showAllPosts) {
        setSavedData(Array.isArray(data) ? data : []);
        setLastPost(null);
      } else {
        setLastPost(data ? data : null);
        setSavedData(null);
      }

      setShowAll(showAllPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setSavedData([]);
    }
  };

  const deletePost = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/post/${id}`, {
        method: "DELETE",
      });

      fetchData(showAll);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const startEditing = (post: Post) => {
    setEditingPost(post);
    setTitle(post.title);
    setDescription(post.description);
  };

  return (
    <div className="p-4 max-w-lg mx-auto mt-20">
      <h1 className="text-xl font-bold">Simple Note App</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded my-2 text-black"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded my-2 text-black"
      ></textarea>
      
      <button onClick={saveData} className="bg-blue-500 text-white p-2 rounded">
        {editingPost ? "Update" : "Save"}
      </button>
      
      <button onClick={() => fetchData(false)} className="bg-gray-500 text-white p-2 rounded ml-2">
        Show Last Saved
      </button>
      <button onClick={() => fetchData(true)} className="bg-green-500 text-white p-2 rounded ml-2">
        Show All
      </button>

      {/* Display last saved post */}
      {lastPost && (
        <div className="mt-4 border p-2 rounded bg-yellow-100">
          <h2 className="font-bold text-black">Last Saved Post</h2>
          <h3 className="font-semibold text-black">{lastPost.title}</h3>
          <p className="text-black">{lastPost.description}</p>
          <button
            onClick={() => deletePost(lastPost.id)}
            className="bg-red-500 text-white p-2 rounded mt-2"
          >
            Delete
          </button>
          <button
            onClick={() => startEditing(lastPost)}
            className="bg-yellow-500 text-white p-2 rounded mt-2 ml-2"
          >
            Edit
          </button>
        </div>
      )}

      {/* Display all saved posts */}
      {showAll && savedData && (
        <div className="mt-4">
          <h2 className="font-bold">All Saved Posts</h2>
          {savedData.length > 0 ? (
            savedData.map((post) => (
              <div key={post.id} className="border p-2 my-2 rounded">
                <h3 className="font-semibold">{post.title}</h3>
                <p>{post.description}</p>
                <button
                  onClick={() => deletePost(post.id)}
                  className="bg-red-500 text-white p-2 rounded mt-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => startEditing(post)}
                  className="bg-yellow-500 text-white p-2 rounded mt-2 ml-2"
                >
                  Edit
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No saved posts yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
