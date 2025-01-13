import React, { useState } from "react";
import "../styles/greatmigration.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [showInstructions, setShowInstructions] = useState(true); // State for showing/hiding instructions

    return (
        <>
            {/* Main Content */}
            <div className="save-homepage">
                <div className="home-page">
                    <button
                        className="back-home-button"
                        onClick={() => navigate("/levels")} // Navigate to the levels page
                    >
                        Enter Museum!
                    </button>
                    <button
                        className="back-home-button"
                        onClick={() => navigate("/eqs")} // Navigate to the essential questions page
                    >
                        Essential Questions!
                    </button>
                </div>
            </div>

            {/* Instructions Modal */}
            {showInstructions && (
                <div className="instructions-modal">
                    <div className="instructions-content">
                        <h2>Game Instructions</h2>
                        <p>You will enter a museum with rooms for you to explore.</p>
                        <p>Navigate towards a room on the floor that you are on and click on it to enter it.</p>
                        <p>To switch floors, move to the elevator and click on it to select a floor.</p>
                        <p>
                            When you are inside a room, click on the person to hear their story or click on an artifact to see
                            a description.
                        </p>
                        <p>Click Enter above to begin!</p>
                        <button
                            className="close-modal-button"
                            onClick={() => setShowInstructions(false)} // Close the modal
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default HomePage;