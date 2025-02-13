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

  const lastThreeBlogs = blogs.slice(-3);
  console.log(lastThreeBlogs);

  return (
    <div className="flex flex-col items-center justify-center gap-[3rem] py-4">
      <h3 className="text-red text-xl font-medium underline underline-offset-[.5rem]">
        Blog
      </h3>
      <div className="flex flex-col gap-6">
        {lastThreeBlogs.map((blog, index) => (
          <div key={blog.id || index} className="flex flex-col gap-4 w-[16rem]">
            <div className="w-64 h-[10rem]">
              <img
                src={urlFor(blog.image).url()}
                alt={blog.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-blue">{blog.title}</h4>
              <p className="text-grey">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
