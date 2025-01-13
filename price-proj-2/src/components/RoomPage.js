import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Artifact from "./Artifact";

const RoomPage = () => {
    const { roomId } = useParams(); // Extract roomId from URL parameters
    const navigate = useNavigate();

    const [selectedArtifactId, setSelectedArtifactId] = useState(null); // Keep track of selected artifact

    // Redirect to BollWeevil component if the roomId is "1a"
    useEffect(() => {
        if (roomId === "room-1a") {
            navigate("/room-1a");
        }
    }, [roomId, navigate]); // Ensure effect runs when roomId changes

    // Example artifact data for other rooms
    const artifacts = [
        {
            id: 1,
            image: "https://via.placeholder.com/100",
            name: "Artifact 1",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/100",
            name: "Artifact 2",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/100",
            name: "Artifact 3",
        },
    ];

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                backgroundColor: "#f4f4f4",
            }}
        >
            {artifacts.map((artifact, index) => (
                <Artifact
                    key={artifact.id}
                    image={artifact.image}
                    name={artifact.name}
                    style={{
                        position: "absolute",
                        top: `${100 + index * 150}px`, // Stagger positions vertically
                        left: `${150 + index * 150}px`, // Stagger positions horizontally
                    }}
                    isSelected={selectedArtifactId === artifact.id}
                    onClick={() => setSelectedArtifactId(artifact.id)}
                />
            ))}
        </div>
    );
};

export default RoomPage;
