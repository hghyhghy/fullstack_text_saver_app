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
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Upload file to backend
  const uploadFile = async () => {
    if (!selectedFile) return alert("Please select a file to upload.");

    const formData = new FormData();
    formData.append("file", selectedFile);

    await fetch("http://localhost:3001/file/upload", {
      method: "POST",
      body: formData,
    });

    alert("File uploaded successfully!");
  };

  // Download file from backend
  const downloadFile = async () => {
    const fileName = prompt("Enter file name to download:");
    if (!fileName) return;

    const response = await fetch(`http://localhost:3001/file/download/${fileName}`);
    if (!response.ok) {
      alert("File not found.");
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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

      {/* File Upload & Download */}
      <div className="mt-4 ml-2">
        <input type="file" onChange={handleFileChange} className="my-2" />
        <button onClick={uploadFile} className="bg-purple-500 text-white p-2 rounded ">
          Upload File
        </button>
        <button onClick={downloadFile} className="bg-orange-500 text-white p-2 rounded">
          Download File
        </button>
      </div>
    </div>
  );
}
