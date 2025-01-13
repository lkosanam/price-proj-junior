import React from "react";

const Artifact = ({ image, name, style, onClick }) => {
    return (
        <div style={style}>
            {/* Artifact Image */}
            <img
                src={image}
                alt={name}
                style={{ cursor: "pointer", width: "100px", height: "100px" }}
                onClick={onClick} // Trigger the onClick function passed from GreatMigration
            />
        </div>
    );
};

export default Artifact;
