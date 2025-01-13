import React from "react";
import Dialogue from "./Dialogue";

const ScopesStudent2 = () => {
  const dialogueData = {
    character: {
      name: "SCOPES STUDENT 2",
    },
    dialogue: [
      {
        text: "hi student 2",
        options: [
          { text: "omg this also works", nextId: 2 },
          { text: "woah", nextId: 3 },
        ],
      },
      {
        id: 2,
        text: "check",
        options: [
          { text: "yay!", nextId: 4 },
          { text: "yayy", nextId: 5 },
        ],
      },
    ],
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Dialogue data={dialogueData} />
    </div>
  );
};

export default ScopesStudent2;
