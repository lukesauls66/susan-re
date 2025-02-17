import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

interface SanityImage {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
}

export interface Review {
  lastName: string;
  clientImage: SanityImage | null;
  homeImage: SanityImage;
  date: string;
  description: string;
  rating: number | null;
  isVerified: boolean;
  firstName: string;
}

export async function getReviews(): Promise<Review[]> {
  const options = { next: { revalidate: 30 } };

  const REVIEW_QUERY = `*[_type == "review"] | order(date desc){
    firstName, 
    lastName, 
    clientImage, 
    homeImage, 
    date, 
    description,
    rating, 
    isVerified
  }`;

  const reviews = await client.fetch(REVIEW_QUERY, {}, options);
  return reviews;
}

export async function getBlogs() {
  const options = { next: { revalidate: 30 } };

  const BLOG_QUERY = `*[_type == "blog"]{title, image, description, date}`;
  const blogs = await client.fetch<SanityDocument[]>(BLOG_QUERY, {}, options);
  return blogs;
}
