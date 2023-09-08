import { defineField, defineType } from "sanity";

export default defineType({
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "string",
    }),
  ],
});
