export default {
  name: "main",
  title: "Main",
  type: "document",
  fields: [
    {
      name: "character",
      title: "Character",
      type: "character",
    },
    {
      name: "race",
      title: "Race",
      type: "reference",
      to: [{ type: "race" }],
    },
  ],
};
