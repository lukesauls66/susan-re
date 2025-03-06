import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "firstMonthlyEvents",
      type: "image",
    }),
    defineField({
      name: "secondMonthlyEvents",
      type: "image",
    }),
    defineField({
      name: "seasonalEvents",
      type: "image",
    }),
  ],
});
