import { defineField, defineType } from "sanity";

export default defineType({
  name: "element",
  title: "Element",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 500,
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "previewURL",
      title: "Preview URL",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "reference", to: { type: "feature" } }],
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "tech" } }],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          title: "Image",
          type: "image",
        },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "longDesc",
      title: "Long Description",
      type: "blockContent",
    }),
    defineField({
      name: "shortDesc",
      title: "Short Description",
      type: "blockContent",
    }),
    defineField({
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      name: "name",
      slug: "slug",
      media: "mainImage",
    },
  },
});
