import React, { useState } from "react";
import "../styles/greatmigration.css";
import { useNavigate } from "react-router-dom";

const Theatre = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/GECsin42oS0"); // Default video

    return (
        <div className="save-homepage">
            <div className="theatre-page">
                {/* Back to Home Button */}
                <button
                    className="back-home-button"
                    onClick={() => navigate("/levels")} // Navigate to the homepage
                >
                    Back to Home
                </button>

                {/* Video Buttons */}
                <div className="video-buttons">
                    <button onClick={() => setCurrentVideo("https://www.youtube.com/embed/GECsin42oS0")}>
                        Prohibition
                    </button>
                    <button onClick={() => setCurrentVideo("https://www.youtube.com/embed/8ceL0qHVpak")}>
                        Tulsa Race Massacre
                    </button>
                    <button onClick={() => setCurrentVideo("https://www.youtube.com/embed/QtYRLtT8bvY")}>
                        Working at Ford
                    </button>
                </div>

                {/* YouTube Video */}
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src={currentVideo}
                        title="YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Theatre;
