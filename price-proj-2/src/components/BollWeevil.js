import React, { useState } from "react";
import Dialogue from "./Dialogue";
import bollWeevilImage from "../images/boll_weevil.png"; // Path to the image

const BollWeevil = () => {
    const [showDialogue, setShowDialogue] = useState(false);

    const dialogueData = {
        character: {
            name: "Boll Weevil",
        },
        dialogue: [
            {
                id: 1,
                text: "Hello there! I’m the Boll Weevil, what can I do for you today?",
                options: [
                    { text: "Tell me about cotton!", nextId: 2 },
                    { text: "Why are you here?", nextId: 3 },
                ],
            },
            {
                id: 2,
                text: "Cotton is what I love most! But beware, I can be a pest.",
                options: [{ text: "Back", nextId: 1 }],
            },
            {
                id: 3,
                text: "I’m here to educate you on agriculture and history. Ask away!",
                options: [{ text: "Back", nextId: 1 }],
            },
        ],
    };

    return (
        <div>
            {/* Boll Weevil Image */}
            <img
                src={bollWeevilImage}
                alt="Boll Weevil"
                onClick={() => setShowDialogue(true)}
                style={{
                    width: "150px",
                    height: "150px",
                    cursor: "pointer",
                }}
            />

            {/* Dialogue Component */}
            {showDialogue && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "50%",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            overflow: "hidden",
                        }}
                    >
                        <Dialogue data={dialogueData} />
                        <button
                            onClick={() => setShowDialogue(false)}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                backgroundColor: "#f44336",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                padding: "5px 10px",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BollWeevil;
