import { defineField, defineType } from "sanity";

export const landingPageType = defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    defineField({
      name: "headerImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headerTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aboutDescription",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
