"use client";
import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Blog, BlogsResponse } from "./types/blog";
import { motion } from "framer-motion";
async function fetchPost(): Promise<BlogsResponse> {
  const res = await fetch("https://shrimo.com/fake-api/blog");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
export default function Home() {
  // const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const fetchedBlogs = useCallback(async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch("https://shrimo.com/fake-api/blog");
  //     const data = await res.json();
  //     setBlogs(data.blogs);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // },[]);

  // useEffect(() => {
  //   fetchedBlogs();
  // }, [fetchedBlogs]);

  const { data, isLoading, isError, error } = useQuery<BlogsResponse, Error>({
    queryKey: ["blogs"],
    queryFn: fetchPost,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <div>Error:{error.message}</div>;
  }
  return (
    <>
      <h2 className="text-3xl justify-center text-center p-2">All blogs</h2>

      <div className="grid grid-cols-3">
        {data?.blogs.length === 0 && <p>No blogs found</p>}
        {/* const blogs=data.blogs; */}
        {data?.blogs.map((blog: Blog) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Animation to final state
            transition={{ duration: 0.5 }} // Transition parameters
            key={blog._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>
              <strong>Authon:</strong>
              {blog.author}
            </p>
            <p>
              <strong>Category:</strong>
              {blog.category}
            </p>
            <p>
              <strong>Tags:</strong>
              {blog.tags.join(", ")}
            </p>
            <p>
              <strong>Published:</strong>{" "}
              {new Date(blog.publishDate).toDateString()}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
