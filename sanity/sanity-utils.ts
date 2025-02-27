import { client } from "@/sanity/lib/client";

interface SanityImage {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
}

export async function uploadImage(file: File): Promise<SanityImage> {
  const asset = await client.assets.upload("image", file, {
    contentType: file.type,
    filename: file.name,
  });

  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };
}

export interface Review {
  lastName: string;
  clientImage: SanityImage | null;
  homeImage: SanityImage | null;
  date: string;
  description: string;
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

export async function postReview({ formData }: { formData: Review }) {
  const doc = {
    _type: "review",
    ...formData,
  };

  await client.create(doc);
}

export interface Blog {
  title: string;
  image: SanityImage;
  description: string;
  date: string;
}

export async function getBlogs(): Promise<Blog[]> {
  const options = { next: { revalidate: 30 } };

  const BLOG_QUERY = `*[_type == "blog"] | order(date desc){title, image, description, date}`;
  const blogs = await client.fetch(BLOG_QUERY, {}, options);
  return blogs;
}
export interface AboutMe {
  name: string;
  imageUrl: SanityImage;
  description: string;
}

export async function getAboutData(): Promise<AboutMe[]> {
  const options = { next: { revalidate: 30 } };

  const BLOG_QUERY = `*[_type == "aboutMe"]{
    name,
    description,
    "imageUrl": image.asset->url
  }`;
  const blogs = await client.fetch(BLOG_QUERY, {}, options);
  return blogs;
}
