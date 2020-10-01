export default {
  name: "character",
  title: "Character",
  type: "object",
  fields: [
    {
      name: "equipment",
      title: "Equipment",
      type: "reference",
      to: [{ type: "equipment" }],
    },
    {
      name: "class",
      title: "Class",
      type: "reference",
      to: [{ type: "class" }],
    },
    {
      name: "stats",
      title: "Stats",
      type: "stats",
    },
    {
      name: "hitPattern",
      title: "Hit Pattern",
      type: "hitPattern",
    },
  ],
};
