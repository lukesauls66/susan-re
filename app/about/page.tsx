/* eslint-disable @next/next/no-img-element */
import { getAboutData } from "@/sanity/sanity-utils";
import React from "react";
import { urlFor } from "@/lib/image";

async function AboutPage() {
  const data = await getAboutData();
  const aboutData = data[0];

  return (
    <section className="p-8 w-full">
      <h1 className="text-center font-semibold text-[2rem] mb-[2rem]">
        About Me
      </h1>
      <div className="flex align-center justify-center gap-4">
        <div className="h-96 w-96 rounded-md overflow-hidden aspect-square">
          <img
            src={urlFor(aboutData.imageUrl).url()}
            alt={aboutData.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[40%]">
          <h3 className="font-bold text-[3rem]">{aboutData.name}</h3>
          <p>{aboutData.description}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
