import { defineField, defineType } from "sanity";

export const reviewType = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "isVerified",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "firstName",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastName",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clientImage",
      type: "image",
    }),
    defineField({
      name: "homeImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      type: "number",
      validation: (Rule) => Rule.required().max(5).min(1),
    }),
  ],
});
