'use client';
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  description: string;
}

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [savedData, setSavedData] = useState<Post[] | null>(null); // Set initial state to `null`

  const saveData = async () => {
    await fetch("http://localhost:3001/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");

    // Don't fetch data automatically after saving
  };

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3001/post");
      const data = await res.json();

      if (Array.isArray(data)) {
        setSavedData(data);
      } else {
        console.warn("Unexpected response format:", data);
        setSavedData([]); 
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setSavedData([]);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
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
        Save
      </button>
      <button onClick={fetchData} className="bg-gray-500 text-white p-2 rounded ml-2">
        Saved
      </button>

      <div className="mt-4">
        {savedData === null ? (
          <p className="text-gray-800">Click "Saved" to fetch posts.</p>
        ) : savedData.length > 0 ? (
          savedData.map((post) => (
            <div key={post.id} className="border p-2 my-2 rounded">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No saved posts yet.</p>
        )}
      </div>
    </div>
  );
}
