import React, { useState, useEffect } from "react";
// hooks cannot be used in IF statement, while and for loops
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("res", res);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []); // [] is dependencies. If [] is null, only call once at creation
  // if use [currentPage], then call useEffect everytime after currentPage updated

  // calculate post indices to display for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const activePosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change active page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1>My Blog</h1>
      <Posts posts={activePosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
