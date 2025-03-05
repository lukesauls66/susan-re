import { getBlogs } from "@/sanity/sanity-utils";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const BlogSection = async () => {
  const blogs = await getBlogs();

  const latestThreeBlogs = blogs.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center gap-[3rem] py-4 px-8">
      <h3 className="text-red text-2xl font-semibold underline underline-offset-[.5rem]">
        Blog
      </h3>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-6 lg:gap-10 xl:gap-12">
        {latestThreeBlogs.map((blog, index) => (
          <div
            key={blog._id}
            className="flex flex-col gap-4 w-full max-w-[19rem] items-center"
          >
            <div className="w-full rounded-md h-[200px]">
              <img
                src={urlFor(blog.image).url()}
                alt={blog.title}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <h4 className="text-blue font-semibold lg:text-lg">
                {blog.title}
              </h4>
              <p className="text-grey lg:text-lg">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
