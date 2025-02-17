"use client";

import { useState, useEffect } from "react";
import Pfp from "@/components/AssetComponents/Pfp";
import { getReviews, Review } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/image";

const ReviewsPageBody = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };

    fetchReviews();
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

  const totalPages = Math.ceil(reviews.length / displayCount);

  const displayedReviews = reviews.slice(
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
    <div className="w-full flex flex-col gap-4">
      {displayedReviews.map((review) => {
        const imageSrc = review.clientImage
          ? urlFor(review.clientImage).url()
          : "";

        return (
          <div
            className="bg-gray-200 rounded-md p-2"
            key={review.firstName + review.lastName}
          >
            <div className="flex items-center justify-between">
              <h3>
                {review.firstName} {review.lastName}
              </h3>
              <Pfp className="w-[1.5rem] h-[1.5rem]" imgSrc={imageSrc} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-grey">
                <p>{review.description}</p>
              </div>
              <div className="h-[200px] w-full">
                <img
                  src={urlFor(review.homeImage).url()}
                  alt={review.firstName}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between mt-4">
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

export default ReviewsPageBody;
