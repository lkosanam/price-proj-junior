import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialogue from "./Dialogue"; // Import the Dialogue component
import "../styles/greatmigration.css"; // Import CSS for styling
import bollWeevilImage from "../images/boll_weevil.png"; // Path to the image
import notebookImage from "../images/notebook.png"; // Path to the image
import sharecropperImage from "../images/sharecropper.png"; // Path to the image
import npc from "../images/africannpc.png";
const GreatMigration = () => {
    const [selectedArtifactId, setSelectedArtifactId] = useState(null); // Track selected artifact
    const [dialogueData, setDialogueData] = useState(null); // Store dialogue data
    const navigate = useNavigate(); // Hook for navigation

    // Define artifacts data
    const artifacts = [
        {
            id: 1,
            image: bollWeevilImage,
            name: "Boll Weevil",
            className: "boll-weevil",
            dialogueData: {
                character: { name: "Boll Weevil" },
                dialogue: [
                    {
                        id: 1,
                        text: "The boll weevil was a push factor representing the economic hardship faced by southern farmers, specifically African American sharecroppers and tenant farmers.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "It is a pest that feeds on cotton and began spreading through the southern United States in the late 19th century. By the 1920s, it had caused widespread destruction to the backbone of the southern economy. Cotton production fell by more than 50% in some southern states during the peak of the infestation. African American sharecroppers, who were heavily reliant on cotton farming, faced devastating financial losses.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "It made farming unsustainable, pushing many African Americans to seek better opportunities in the industrialized North. Many personal accounts describe the boll weevil as a “curse” that destroyed their southern lives and left them with no choice but to migrate. Approximately 300,000 to 500,000 African Americans moved up north during the Great Migration. (Effact #8).",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 2,
            image: sharecropperImage,
            name: "Train Ticket",
            className: "sharecropper",
            dialogueData: {
                character: { name: "Notebook from the North" },
                dialogue: [
                    {
                        id: 1,
                        text: "Education served as both a push and pull factor, with education in the North being much more valued and accessible.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "The only education southern farmers expected their children to pursue were the 'Three R’s' - reading, writing, and ‘rithmetic. A formal education was something specific to the North, as farm tasks didn’t require mental ability as much as physical prowess. Spending per pupil in Black schools in the South was often less than 10% of what was spent on white students.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "In the North, higher-paying jobs were only granted to those with a mastery of mathematics and language. You couldn’t make it in urban America without a high school or college graduate degree, which were becoming increasingly more attainable. Cities offered better-funded schools and more opportunities for higher education. Education was the new measure of success; it was the pathway to opportunity.",
                        options: [{ text: "Next", nextId: 4 }],
                    },
                    {
                        id: 4,
                        text: "Literacy rates among African Americans rose from about 30% to 50% from 1910 to 1930.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 3,
            image: notebookImage,
            name: "Photograph",
            className: "notebook",
            dialogueData: {
                character: { name: "Sharecropper's Contract" },
                dialogue: [
                    {
                        id: 1,
                        text: "Sharecropping, a push factor, was a legal arrangement in which a tenant would work land in exchange for a share of the crops produced. In 1920, about 75% of African Americans were involved in agriculture, with many trapped in such an agreement. This system benefitted farmers who couldn’t afford land or equipment as well as landowners who didn’t have time to farm on their own.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "Sharecroppers were often forced to buy supplies from landowners at inflated prices, creating cycles of debt nearly impossible to escape. They bound families to the land as well, creating a system many called 'slavery with a paycheck.' ",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "Factory jobs in the North pulled many African Americans, as the economic oppression symbolized by sharecropping was a major reason many African Americans sought jobs that paid steady wages. They hoped to finally gain financial independence.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 4,
            image: npc,
            name: "Reginald",
            className: "npc",
            dialogueData: {
                character: { name: "Reginald" },
                dialogue: [
                    {
                        id: 1,
                        text: "Leaving Mississippi wasn’t just my story—it was the story of millions of Black folks back then.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "The South was a place of constant fear, where lynchings and Jim Crow laws kept us down. Sharecropping was no better—it was just another form of slavery.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "When we heard there were jobs up North, in places like Chicago and Detroit, paying wages we’d never seen before, folks started packing up. My wife Clara and I left for Chicago in 1916. We didn’t know what we’d find, but we knew staying wasn’t an option.",
                        options: [{ text: "Continue", nextId: 4 }],
                    },
                    {
                        id: 4,
                        text: "When we got here, it was like a new world. Sure, the factories were rough—hot, loud, and dirty—but at least they paid a fair wage. And schools? Better than anything our daughters could’ve dreamed of back home. But it wasn’t perfect.",
                        options: [{ text: "Next", nextId: 5 }],
                    },
                    {
                        id: 5,
                        text: "The Red Summer of 1919 showed us that racism is very widespread. Still, moving North gave us something we couldn’t find in Mississippi: hope.",
                        options: [
                            { text: "What were the main reasons for migration?", nextId: 6 },
                            { text: "How did migration impact cities?", nextId: 7 },
                            { text: "What challenges were faced?", nextId: 8 },
                        ],
                    },
                    {
                        id: 6,
                        text: "Folks were runnin’ from fear and hard times. Down South, it was lynchings, Jim Crow laws, and sharecropping keeping us down. Them plantation owners made sure we stayed poor. Up North, there were factories paying real wages, and a chance at something freer and better.",
                        options: [{ text: "Go Back", nextId: 5 }],
                    },
                    {
                        id: 7,
                        text: "When folks like me moved North, we brought our culture, our music, our ways of life. Harlem became a place full of energy—art, jazz, and ideas all coming together. But not everyone liked it. Some white folks didn’t want us here, and that caused all kinds of tension in the cities.",
                        options: [{ text: "Go Back", nextId: 5 }],
                    },
                    {
                        id: 8,
                        text: "It wasn’t all easy. We left the South, but racism followed us North. We had to live in crowded neighborhoods ‘cause landlords wouldn’t rent to us, and riots like the Red Summer of 1919 showed us how much hate there still was. Even so, it was better than the fear and danger we lived with back in Mississippi.",
                        options: [{ text: "Go Back", nextId: 5 }],
                    },
                ],
            },
        }

    ];

    const handleArtifactClick = (artifactId) => {
        const artifact = artifacts.find((artifact) => artifact.id === artifactId);
        setDialogueData(artifact.dialogueData);
        setSelectedArtifactId(artifactId);
    };

    const handleCloseDialogue = () => {
        setSelectedArtifactId(null);
        setDialogueData(null);
    };

    return (
        <div className="great-migration-container">
            <div className="great-migration-page">
                {/* Back to Home Button */}
                <button
                    className="back-home-button"
                    onClick={() => navigate("/levels")} // Navigate to the homepage
                >
                    Back to Home
                </button>
                {/* Render Artifacts */}
                {artifacts.map((artifact) => (
                    <div
                        key={artifact.id}
                        className={`artifact ${artifact.className}`} // Custom class for styling
                        onClick={() => handleArtifactClick(artifact.id)}
                    >
                        <img src={artifact.image} alt={artifact.name} />
                    </div>
                ))}

                {/* Dialogue */}
                {selectedArtifactId && dialogueData && (
                    <div className="dialogue-container">
                        <Dialogue data={dialogueData} onClose={handleCloseDialogue} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default GreatMigration;
