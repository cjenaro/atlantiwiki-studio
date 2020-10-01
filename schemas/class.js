export default {
  name: "class",
  title: "Class",
  type: "document",
  fields: [
    {
      name: "weapon",
      title: "Weapon",
      type: "reference",
      to: [{ type: "weapon" }],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "skill" }],
    },
    {
      name: "talents",
      title: "Talents",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
