import { getReviews } from "@/sanity/sanity-utils";

const ReviewsPageBody = async () => {
  const reviews = await getReviews();

  return (
    <div>
      <h1>Reviews Page Body</h1>
    </div>
  );
};

export default ReviewsPageBody;
