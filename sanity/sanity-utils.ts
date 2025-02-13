import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getReviews() {
  const options = { next: { revalidate: 30 } };

  const REVIEW_QUERY = `*[_type == "review"]{firstName, lastName, clientImage, homeImage, date, description, rating, isVerified}`;
  const reviews = await client.fetch<SanityDocument[]>(
    REVIEW_QUERY,
    {},
    options,
  );
  return reviews;
}
