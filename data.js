export default [
  {
    category: "Tech",
    color: "#FEBCC8",
    todo: [
      { name: "Eat", done: true, id: "1" },
      { name: "Code", done: false, id: "2" },
      { name: "Sleep", done: false, id: "3" },
    ],
  },
  {
    category: "Lifestyle",
    color: "#EFB0C9",
    todo: [
      { name: "Eat", done: false, id: "1" },
      { name: "Code", done: true, id: "2" },
      { name: "Sleep", done: true, id: "3" },
    ],
  },
  {
    category: "Tech",
    color: "#F1E8D9",
    todo: [
      { name: "Eat", done: true, id: "1" },
      { name: "Code", done: false, id: "2" },
      { name: "Sleep", done: false, id: "3" },
    ],
  },
  {
    category: "Lifestyle",
    color: "#E0FEFE",
    todo: [
      { name: "Eat", done: false, id: "1" },
      { name: "Code", done: true, id: "2" },
      { name: "Sleep", done: true, id: "3" },
    ],
  },
];

export const getColor = () => {
  const colors = [
    "#FEBCC8",
    "#FFFFD8",
    "#EAEBFF",
    "#E0FEFE",
    "#D3EEFF",
    "#EFB0C9",
    "#F4C2D7",
    "#F8DAE9",
    "#B9D6F3",
    "#A1C9F1",
    "#F1E8D9",
  ];
  const random = Math.floor(Math.random() * colors.length);

  return colors[random];
};
