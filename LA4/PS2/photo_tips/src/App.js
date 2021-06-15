import React from "react";
import ListComponent from "./ListComponent";

const tips = [
  {
    id: "1",
    tip: "Use Bright lighting",
    author: "Mahendra Gharge",
  },
  {
    id: "2",
    tip: "use well lit environment",
    author: "Anonymus",
  },
  {
    id: "3",
    tip: "Use Bright lighting",
    author: "Mahendra Gharge",
  },
  {
    id: "4",
    tip: "use well lit environment",
    author: "Anonymus",
  },
  {
    id: "5",
    tip: "Use Bright lighting",
    author: "Mahendra Gharge",
  },
  {
    id: "6",
    tip: "use well lit environment",
    author: "Anonymus",
  },
  {
    id: "7",
    tip: "Use Bright lighting",
    author: "Mahendra Gharge",
  },
  {
    id: "8",
    tip: "use well lit environment",
    author: "Anonymus",
  },
  {
    id: "9",
    tip: "Use Bright lighting",
    author: "Mahendra Gharge",
  },
  {
    id: "10",
    tip: "use well lit environment",
    author: "Anonymus",
  },
];

const App = () => {
  return (
    <>
      <h1>Following are some photography tips for beginners</h1>
      {tips.map((tip) => {
        return <ListComponent tip={tip} />;
      })}
    </>
  );
};

export default App;
