import { client } from "@/sanity/lib/client";

export interface SanityImage {
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
  _id: string;
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

  const REVIEW_QUERY = `*[_type == "review" && isVerified == true] | order(date desc){
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

export async function postReview({
  formData,
}: {
  formData: Omit<Review, "_id">;
}) {
  const doc = {
    _type: "review",
    ...formData,
  };

  await client.create(doc);
}

export interface Blog {
  _id: string;
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

export async function getAboutData(): Promise<AboutMe> {
  const options = { next: { revalidate: 30 } };

  const ABOUT_QUERY = `*[_type == "aboutMe"]{
    name,
    description,
    "imageUrl": image.asset->url
  }[0]`;
  const about = await client.fetch(ABOUT_QUERY, {}, options);
  return about;
}

export interface LandingPageData {
  headerImage: SanityImage;
  headerTitle: string;
  aboutImage: SanityImage;
  aboutTitle: string;
  aboutDescription: string;
}

export async function getLandingPageData(): Promise<LandingPageData> {
  const options = { next: { revalidate: 30 } };

  const LANDING_QUERY = `*[_type == "landingPage"]{
    "headerImage": headerImage.asset->url,
    headerTitle,
    "aboutImage": aboutImage.asset->url,
    aboutTitle,
    aboutDescription
  }[0]`;
  const landingPageData = await client.fetch(LANDING_QUERY, {}, options);
  return landingPageData;
}
