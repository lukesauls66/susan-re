"use client";

import { useState, useEffect } from "react";
import { getBlogs, Blog } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/image";

const BlogPageBody = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await getBlogs();
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const updateDisplayCount = () => {
      if (window.innerWidth >= 768) {
        setDisplayCount(10);
      } else {
        setDisplayCount(3);
      }
    };

    updateDisplayCount();
    window.addEventListener("resize", updateDisplayCount);

    return () => window.removeEventListener("resize", updateDisplayCount);
  }, []);

  const totalPages = Math.ceil(blogs.length / displayCount);

  const displayedBlogs = blogs.slice(
    (currentPage - 1) * displayCount,
    currentPage * displayCount
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 md:gap-6 lg:gap-8 xl:gap-12">
      {displayedBlogs.map((blog, index) => (
        <div
          className={`bg-gray-200 rounded-md p-2 md:p-4 xl:p-6 max-w-[40rem] lg:max-w-[75rem] ${index % 2 === 0 ? "md:self-start" : "md:self-end"}`}
          key={blog.title + blog.date}
        >
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full">
              <img
                src={urlFor(blog.image).url()}
                alt={blog.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <h4 className="text-blue font-semibold lg:text-lg">
                {blog.title}
              </h4>
              <p className="text-grey lg:text-lg">{blog.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between w-full mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-grey text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-grey text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPageBody;
