import React, { useState, useEffect } from "react";

const Dialogue = ({ data, onClose }) => {
  const [currentDialogue, setCurrentDialogue] = useState(data.dialogue[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [speed, setSpeed] = useState(50); // Initial delay between characters

  useEffect(() => {
    setDisplayedText("");
    setCharIndex(0);
  }, [currentDialogue]);

  useEffect(() => {
    if (charIndex < currentDialogue.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentDialogue.text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed); // Use the `speed` state here
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentDialogue.text, speed]);

  const handleOptionClick = (nextId) => {
    const nextDialogue = data.dialogue.find((d) => d.id === nextId);
    if (nextDialogue) {
      setCurrentDialogue(nextDialogue);
    }
  };

  const handleSpeedUp = () => {
    setSpeed((prev) => Math.max(10, prev - 10)); // Decrease delay, minimum 10ms
  };

  return (
      <div style={styles.container}>
        <div style={styles.characterInfo}>
          <div style={styles.nameBox}>
            <h3>{data.character.name}</h3>
          </div>
        </div>

        <div style={styles.dialogueBox}>
          <p>{displayedText}</p>
        </div>

        <div style={styles.options}>
          {currentDialogue.options.map((option, index) => (
              <button
                  key={index}
                  onClick={() => handleOptionClick(option.nextId)}
                  style={styles.optionButton}
              >
                {option.text}
              </button>
          ))}
        </div>

        <div style={styles.controls}>
          <button onClick={handleSpeedUp} style={styles.speedUpButton}>
            Speed Up
          </button>
          <button onClick={onClose} style={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
  );
};

const styles = {
  // (Same styles as before)
  speedUpButton: {
    padding: "8px 12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px"
  },

  closeButton: {
    padding: "8px 12px",
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    marginLeft: "5px",
    marginRight: "5px"
  },
};


export default Dialogue;
