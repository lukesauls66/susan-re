"use client";

import { postReview } from "@/sanity/sanity-utils";
import { useState } from "react";
import { Review } from "@/sanity/sanity-utils";

const ReviewForm = () => {
  const [formData, setFormData] = useState<Review>({
    firstName: "",
    lastName: "",
    clientImage: null,
    homeImage: null,
    description: "",
    isVerified: false,
    date: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData((prevData) => ({
      ...prevData,
      date: new Date().toISOString(),
    }));

    try {
      await postReview({ formData });

      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contentType: "testimonial",
          formData,
        }),
      });
    } catch (error) {
      console.error("Error making and sending testimonial", error);
    }
  };

  return (
    <div>
      <h2>Review Form</h2>
    </div>
  );
};

export default ReviewForm;
