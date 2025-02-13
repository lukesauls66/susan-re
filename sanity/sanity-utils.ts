import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getReviews() {
  const options = { next: { revalidate: 30 } };

  const REVIEW_QUERY = `*[_type == "review"]{firstName, lastName, clientImage, homeImage, date, description, rating, isVerified}`;
  const reviews = await client.fetch<SanityDocument[]>(
    REVIEW_QUERY,
    {},
    options
  );
  return reviews;
}

export async function getBlogs() {
  const options = { next: { revalidate: 30 } };

  const BLOG_QUERY = `*[_type == "blog"]{title, image, description, date}`;
  const blogs = await client.fetch<SanityDocument[]>(BLOG_QUERY, {}, options);
  return blogs;
}
