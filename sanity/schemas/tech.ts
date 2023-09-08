import { defineField, defineType } from "sanity";

export default defineType({
  name: "tech",
  title: "Tech Stack",
  type: "document",
  fields: [
    defineField({
      name: "shortName",
      title: "Short Name",
      type: "string",
    }),
  ],
});
