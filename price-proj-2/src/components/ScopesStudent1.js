import React from "react";
import Dialogue from "./Dialogue";

const ScopesStudent1 = () => {
  const dialogueData = {
    character: {
      name: "SCOPES STUDENT",
    },
    dialogue: [
      {
        text: "hi",
        options: [
          { text: "omg this works", nextId: 2 },
          { text: "woah", nextId: 3 },
        ],
      },
      {
        id: 2,
        text: "check",
        options: [
          { text: "checked!", nextId: 4 },
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

export default ScopesStudent1;
