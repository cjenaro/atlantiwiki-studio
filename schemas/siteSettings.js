export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "team",
      title: "Team",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
