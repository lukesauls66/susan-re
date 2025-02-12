import { defineField, defineType } from 'sanity'

export const reviewType = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "isVerified",
      type: "boolean"
    }),
    defineField({
      name: "firstName",
      type: "string"
    }),
    defineField({
      name: "lastName",
      type: "string"
    }),
    defineField({
      name: "clientImage",
      type: "image"
    }),
    defineField({
      name: "homeImage",
      type: "image"
    }),
    defineField({
      name: "date",
      type: "datetime"
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{type: "block"}]
    }),
  ]
})