"use client";

import { useState, useEffect } from "react";
import { getReviews, Review, getBlogs, Blog } from "@/sanity/sanity-utils";
import ReviewsContent from "./ReviewsContent";
import BlogsContent from "./BlogsContent";

interface PageContentProps {
  contentType: "reviews" | "blogs";
}

const PageContent: React.FC<PageContentProps> = ({ contentType }) => {
  const [content, setContent] = useState<Review[] | Blog[]>([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (contentType === "blogs") {
      const fetchBlogs = async () => {
        try {
          const blogData = await getBlogs();
          setContent(blogData);
        } catch (error) {
          console.error("Error fetching blogs", error);
        }
      };

      fetchBlogs();
    } else {
      const fetchReviews = async () => {
        try {
          const reviewsData = await getReviews();
          setContent(reviewsData);
        } catch (error) {
          console.error("Error fetching reviews", error);
        }
      };

      fetchReviews();
    }
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

  const totalPages = Math.ceil(content.length / displayCount);

  const displayedContent = content.slice(
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
      {contentType === "reviews" && (
        <ReviewsContent displayedContent={displayedContent} />
      )}
      {contentType === "blogs" && (
        <BlogsContent displayedContent={displayedContent} />
      )}
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

export default PageContent;
