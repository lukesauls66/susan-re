"use client";

import { useState, useEffect } from "react";
import { getBlogs, Blog } from "@/sanity/sanity-utils";

const BlogPageBody = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  return <h1>Blog Body</h1>;
};

export default BlogPageBody;
