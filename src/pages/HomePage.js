import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus harum enim itaque. Enim sint cumque itaque, suscipit, praesentium quas reiciendis et ullam, ipsum corporis molestias vel rem ducimus doloribus optio.",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus harum enim itaque. Enim sint cumque itaque, suscipit, praesentium quas reiciendis et ullam, ipsum corporis molestias vel rem ducimus doloribus optio.",
  },
  {
    id: 3,
    title: "Ciemna materia i cemina energia",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus harum enim itaque. Enim sint cumque itaque, suscipit, praesentium quas reiciendis et ullam, ipsum corporis molestias vel rem ducimus doloribus optio.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
