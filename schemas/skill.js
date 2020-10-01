export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "damage",
      title: "Damage",
      type: "number",
    },
    {
      name: "hitPattern",
      title: "Hit Pattern",
      type: "hitPattern",
    },
  ],
};
