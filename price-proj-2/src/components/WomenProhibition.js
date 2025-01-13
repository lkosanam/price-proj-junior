import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialogue from "./Dialogue"; // Import the Dialogue component
import "../styles/greatmigration.css"; // Import CSS for styling
import flapperDress from "../images/flapperdress.png"; // Path to the image
import alCapone from "../images/alcapone.png"; // Path to the image
import bootleggingEquipment from "../images/sneakyways.png"; // Path to the image
import npc from "../images/npcgirl.png";

const WomenProhibition = () => {
    const [selectedArtifactId, setSelectedArtifactId] = useState(null); // Track selected artifact
    const [dialogueData, setDialogueData] = useState(null); // Store dialogue data
    const navigate = useNavigate(); // Hook for navigation

    // Define artifacts data
    const artifacts = [
        {
            id: 1,
            image: flapperDress,
            name: "Boll Weevil",
            className: "flapper",
            dialogueData: {
                character: { name: "Flapper Dress" },
                dialogue: [
                    {
                        id: 1,
                        text: "The flapper dress became an iconic symbol of women’s newfound social independence during the Jazz Age of the 1920s. Characterized by short hemlines, loose fits, and decorative fringe or beads, these dresses represented a break from traditional Victorian fashion and societal expectations for women.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "Following the ratification of the 19th Amendment in 1920, which granted women the right to vote, many embraced lifestyles that defied traditional norms. They frequented speakeasies—illegal bars during Prohibition—where they danced to jazz music, smoked cigarettes, and drank alcohol alongside men.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "The flapper dress and lifestyle signaled a movement toward gender equality and personal freedom. Women became more visible in public life, exploring new opportunities in education, work, and leisure.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 2,
            image: bootleggingEquipment,
            name: "Train Ticket",
            className: "bootlegging",
            dialogueData: {
                character: { name: "Bootlegging Equipment" },
                dialogue: [
                    {
                        id: 1,
                        text: "Bootlegging equipment, such as hidden compartments in furniture, homemade stills, flasks, and rum-running maps, represents the resourcefulness and creativity of smugglers and bootleggers during Prohibition. These tools were used to smuggle, produce, and distribute illegal alcohol.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "Prohibition led to widespread smuggling and bootlegging as Americans sought ways to circumvent the ban. Rum-runners transported alcohol across borders using fast, agile boats to evade law enforcement, while domestic bootleggers set up secret distilleries in basements, warehouses, and rural areas. Homemade moonshine, though popular, was often dangerous due to unregulated production. Speakeasies, hidden bars requiring passwords for entry, flourished in cities, becoming cultural hubs for jazz music and flapper culture.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "Bootlegging equipment highlights how Prohibition inadvertently fueled organized crime and transformed alcohol consumption into an underground phenomenon.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 3,
            image: alCapone,
            name: "Photograph",
            className: "alcapone",
            dialogueData: {
                character: { name: "Al Capone's Mugshot" },
                dialogue: [
                    {
                        id: 1,
                        text: "Al Capone’s mugshot represents the notoriety of organized crime during the Prohibition era of the 1920s. Known as \"Scarface,\" Capone rose to power as one of the most infamous gangsters in American history, controlling a vast criminal empire in Chicago.\n",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "Prohibition, enacted by the 18th Amendment and the Volstead Act, banned the manufacture, sale, and transport of alcohol, creating a lucrative black market. Capone capitalized on this demand, running an extensive network of bootlegging operations, speakeasies, and illegal breweries. He used bribery to influence police, judges, and politicians, while deploying violence to eliminate rival gangs. Despite his ruthless reputation, Capone portrayed himself as a benefactor to the city by funding soup kitchens and charities during tough economic times.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "Capone’s criminal empire demonstrated the unintended consequences of Prohibition, as organized crime flourished under the federal ban on alcohol. His eventual conviction for tax evasion in 1931 marked a turning point in efforts to combat organized crime, highlighting the federal government’s increasing focus on targeting powerful crime syndicates.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 4,
            image: npc, // Replace with the path to Rosie's image
            name: "Rosie DeLuc, Speakeasy Owner",
            className: "npc",
            dialogueData: {
                character: { name: "Rosie" },
                dialogue: [
                    {
                        id: 1,
                        text: "When Prohibition started in 1920, it didn’t stop folks from drinking—it just made us sneaky about it.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "I turned my bakery’s basement into a speakeasy, called it 'Rosie’s Retreat.' Jazz played, whiskey flowed, and folks from all walks of life came to forget their troubles.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "But running a speakeasy wasn’t easy. We had to bribe officials and stay one step ahead of the Feds.",
                        options: [{ text: "Next", nextId: 4 }],
                    },
                    {
                        id: 4,
                        text: "Prohibition didn’t work because it ignored human nature. Instead of stopping drinking, it made criminals rich.",
                        options: [{ text: "Next", nextId: 5 }],
                    },
                    {
                        id: 5,
                        text: "It also changed society—women started drinking openly in speakeasies, and jazz became the soundtrack of rebellion. By the time Prohibition ended, it was clear the whole thing had been a failure.",
                        options: [
                            { text: "What was the central issue in the Gitlow v. New York case?", nextId: 6 },
                            { text: "What precedent did Gitlow v. New York establish regarding free speech?", nextId: 7 },
                            { text: "How did the ruling reflect the fears of the time?", nextId: 8 },
                        ],
                    },
                    {
                        id: 6,
                        text: "The case questioned whether Benjamin Gitlow’s socialist pamphlets, which advocated for revolution, were protected under the First Amendment or if states could regulate speech that could incite danger.",
                        options: [{ text: "Go Back", nextId: 5 }],
                    },
                    {
                        id: 7,
                        text: "While the Court upheld Gitlow’s conviction, it established that the First Amendment applied to state governments through the Fourteenth Amendment, laying the foundation for modern free speech protections.",
                        options: [{ text: "Go Back", nextId: 5 }],
                    },
                    {
                        id: 8,
                        text: "The ruling reflected fears of communism and radicalism during the Red Scare, as the government prioritized public safety over free speech, particularly for ideas that challenged the status quo.",
                        options: [{ text: "Go Back", nextId: 5 }],
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
            <div className="women-page">
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

export default WomenProhibition;
