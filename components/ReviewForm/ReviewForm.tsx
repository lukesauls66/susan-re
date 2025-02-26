"use client";

import { postReview, uploadImage } from "@/sanity/sanity-utils";
import { useState } from "react";
import { Review, getReviews } from "@/sanity/sanity-utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface FormData extends Omit<Review, "clientImage" | "homeImage" | "date"> {
  clientImage: File | null;
  homeImage: File | null;
}

const ReviewForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    clientImage: null,
    homeImage: null,
    description: "",
    isVerified: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reviewData: Review = {
      ...formData,
      clientImage: null,
      homeImage: null,
      date: new Date().toISOString(),
    };

    try {
      if (formData.clientImage) {
        const clientImageAsset = await uploadImage(formData.clientImage);
        reviewData.clientImage = clientImageAsset;
      }

      if (formData.homeImage) {
        const homeImageAsset = await uploadImage(formData.homeImage);
        reviewData.homeImage = homeImageAsset;
      }

      await postReview({ formData: reviewData });

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

      getReviews();
      router.push("/");
    } catch (error) {
      console.error("Error making and sending testimonial", error);
    }
  };

  return (
    <div className="flex items-center justify-center pt-6 pb-10 px-4 w-full">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-6 items-center bg-blue p-4 rounded-lg w-full max-w-[40rem]"
      >
        <div className="flex gap-4 w-full">
          <label className="flex flex-col gap-2 cursor-pointer text-white w-full">
            First Name
            <Input
              type="text"
              className="bg-white text-black"
              value={formData.firstName}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  firstName: e.target.value,
                }))
              }
            />
          </label>
          <label className="flex flex-col gap-2 cursor-pointer text-white w-full">
            Last Name
            <Input
              type="text"
              className="bg-white text-black"
              value={formData.lastName}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  lastName: e.target.value,
                }))
              }
            />
          </label>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-4 w-full">
          <label className="flex flex-col gap-2 cursor-pointer text-white w-full">
            Upload Client Image
            <Input
              type="file"
              name="clientImage"
              className="bg-white px-1 cursor-pointer text-black"
              onChange={handleFileChange}
            />
          </label>
          <label className="flex flex-col gap-2 cursor-pointer text-white w-full">
            Upload Home Image
            <Input
              type="file"
              name="homeImage"
              className="bg-white px-1 cursor-pointer text-black"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 cursor-pointer text-white w-full">
          Testimonial
          <textarea
            name="description"
            className="bg-white w-full h-[12rem] py-1 px-3 rounded-lg focus:outline-none text-black"
            value={formData.description}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                description: e.target.value,
              }))
            }
          />
        </label>
        <Button type="submit" className="bg-red">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
