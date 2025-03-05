import { Review, Blog } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/image";
import React from "react";

interface BlogsContentProps {
  displayedContent: Review[] | Blog[];
}

const BlogsContent: React.FC<BlogsContentProps> = ({ displayedContent }) => {
  return (
    <>
      {displayedContent.map((blog, index) => {
        const blogItem = blog as Blog;

        return (
          <div
            className={`bg-gray-200 rounded-md p-2 md:p-4 xl:p-6 max-w-[40rem] lg:max-w-[55rem] ${index % 2 === 0 ? "md:self-start" : "md:self-end"}`}
            key={blogItem._id}
          >
            <div className="flex flex-col gap-4 w-full items-center">
              <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full">
                <img
                  src={urlFor(blogItem.image).url()}
                  alt={blogItem.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 items-start w-full">
                <h4 className="text-blue font-semibold lg:text-lg">
                  {blogItem.title}
                </h4>
                <p className="text-grey lg:text-lg">{blogItem.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogsContent;
