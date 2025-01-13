import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialogue from "./Dialogue"; // Import the Dialogue component
import "../styles/greatmigration.css"; // Import CSS for styling
import badcar from "../images/tomford.png"; // Path to the image
import sewingmachine from "../images/sewingmachine.png"; // Path to the image
import document from "../images/document.png"; // Path to the image
import npc from "../images/npc.png";

const WorkersRights = () => {
    const [selectedArtifactId, setSelectedArtifactId] = useState(null); // Track selected artifact
    const [dialogueData, setDialogueData] = useState(null); // Store dialogue data
    const navigate = useNavigate(); // Hook for navigation

    // Define artifacts data
    const artifacts = [
        {
            id: 1,
            image: sewingmachine,
            name: "Boll Weevil",
            className: "sewing",
            dialogueData: {
                character: { name: "The Singer Sewing Machine" },

                dialogue: [
                    {
                        id: 1,
                        text: "The Singer sewing machine was a revolutionary tool that enabled women to enter the workforce in greater numbers, particularly in the textile and garment industries.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "The Singer sewing machine, invented in the late 19th century, allowed for the mass production of clothing, creating new employment opportunities for women as seamstresses in factories or from home. The 1920s also saw women taking on roles as telephone operators, typists, and sales clerks as industries expanded and sought inexpensive, reliable labor.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "While these jobs were often low-paying and offered limited advancement, they provided women with a degree of financial independence and marked a shift in societal expectations for women’s roles, which had already begun changing during World War I. (Effact #3)",
                        options: [{ text: "Next", nextId: 4 }],
                    },
                    {
                        id: 4,
                        text: "The growing presence of women in the workforce challenged traditional gender norms and contributed to their increasing social and economic independence. However, women continued to face wage discrimination and barriers to career advancement. The urbanization and influx of people into cities created both opportunities and challenges, as overcrowding and poor working conditions often accompanied these changes. (Effact #9)",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 2,
            image: document,
            name: "Train Ticket",
            className: "afcflyers",
            dialogueData: {
                character: { name: "AFL and Labor Union Flyers" },
                dialogue: [
                    {
                        id: 1,
                        text: "Flyers distributed by labor unions like the American Federation of Labor (AFL) symbolized the efforts of organized labor to improve working conditions during the 1920s.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "During the 1920s, the AFL and other unions advocated for shorter workweeks, higher wages, and safer working environments. They succeeded in negotiating the eight-hour workday in many industries, helping to standardize fair labor practices. Unions also campaigned against child labor and pushed for workplace safety regulations to protect workers from hazardous conditions.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "Union efforts aimed to ensure workers could share in the prosperity of the economic boom. However, they faced resistance from employers through \"open shop\" campaigns, which aimed to weaken union influence. Despite challenges, unions established precedents that shaped the modern labor movement and improved the lives of countless workers. (Effact #9)",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 3,
            image: badcar,
            name: "Photograph",
            className: "car",
            dialogueData: {
                character: { name: "Ford's Model T" },
                dialogue: [
                    {
                        id: 1,
                        text: "Ford’s Model T represents not only the advent of affordable automobiles but also Henry Ford’s revolutionary approach to labor conditions. It became the symbol of economic progress and better worker treatment during the 1920s.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "In 1914, Henry Ford transformed the American workplace by doubling workers’ wages to $5 per day and reducing their workday from 9 hours to 8 hours. Ford was also the first major industrialist to grant his employees weekends off, improving their quality of life and increasing their leisure time. These changes allowed Ford’s workers to become his customers, creating a cycle of economic growth as workers now had the money and time to purchase the very products they were manufacturing.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "By setting new standards for labor conditions, Ford influenced other industries to follow suit, contributing to the broader economic boom of the 1920s. His policies improved living standards for industrial workers and popularized the concept of mass production. The Model T’s affordability and widespread ownership also transformed transportation and daily life in America. (Effact #9)",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 4,
            image: npc, // Replace with the path to Tommy's image
            name: "Tommy, Irish Immigrant Factory Worker",
            className: "npc",
            dialogueData: {
                character: { name: "Tommy" },
                dialogue: [
                    {
                        id: 1,
                        text: "I came to America in 1905, thinkin’ it was the land of opportunity. Instead, I found myself in a steel factory, workin’ 12-hour days for barely enough to eat. The bosses didn’t care about us workers.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "One of my mates lost his hand on the job, and they didn’t even compensate him. That’s when I joined the union. We organized strikes and demanded better pay, safer conditions, and shorter hours.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "The bosses fought us hard—fired folks, sent in goons—but we stood our ground. Over time, unions grew stronger, and workers like me started to see change. It wasn’t just about better jobs—it was about dignity.",
                        options: [
                            { text: "What challenges did workers face during the early 20th century?", nextId: 5 },
                            { text: "How did unions fight for better conditions for workers?", nextId: 6 },
                            { text: "How did the Red Scare affect workers’ rights movements?", nextId: 7 },
                        ],
                    },
                    {
                        id: 4,
                        text: "Workers faced long hours, low wages, and unsafe working conditions. Many lacked job security, and there were few protections for injured workers or those seeking better treatment.",
                        options: [{ text: "Go Back", nextId: 3 }],
                    },
                    {
                        id: 5,
                        text: "Unions organized strikes, demanded better pay and hours, and lobbied for labor laws. Events like the steel strike of 1919 highlighted the growing power of organized labor despite resistance from employers and the government.",
                        options: [{ text: "Go Back", nextId: 3 }],
                    },
                    {
                        id: 6,
                        text: "The Red Scare associated labor strikes and union activity with communism, leading to public mistrust and government crackdowns on organized labor, which slowed progress for workers’ rights.",
                        options: [{ text: "Go Back", nextId: 3 }],
                    },
                ],
            },
        },

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
        <div className="save-homepage">
            <div className="workers-page">
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

export default WorkersRights;
