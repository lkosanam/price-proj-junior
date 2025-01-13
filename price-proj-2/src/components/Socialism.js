import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialogue from "./Dialogue"; // Import the Dialogue component
import "../styles/greatmigration.css"; // Import CSS for styling
import manifestoPamphlet from "../images/document.png"; // Path to the image
import bioTextbook from "../images/bioTextbook.png"; // Path to the image
import newspaper from "../images/newspaper.png"; // Path to the image
import npc from "../images/npcgirl.png";

const Socialism = () => {
    const [selectedArtifactId, setSelectedArtifactId] = useState(null); // Track selected artifact
    const [dialogueData, setDialogueData] = useState(null); // Store dialogue data
    const navigate = useNavigate(); // Hook for navigation

    // Define artifacts data
    const artifacts = [
        {
            id: 1,
            image: newspaper,
            name: "Boll Weevil",
            className: "newspaper",
            dialogueData: {
                character: { name: "Communist Publication" },
                dialogue: [
                    {
                        id: 1,
                        text: "A communist newspaper represents the spread of socialist and communist ideologies in the US. Publications like the Revolutionary Age or The Daily Worker were key tools for organizing labor movements.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "The Russian Revolution of 1917 and the rise of the Soviet Union caused widespread fear of communism in the U.S., as many Americans saw it as a threat to democracy and capitalism. Communism called for public ownership of property and the elimination of social hierarchies, ideas that directly opposed American values of individualism and free enterprise.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "This fear escalated during the Red Scare, when suspected radicals, immigrants, and union leaders were targeted for their political beliefs. The Palmer Raids, led by Attorney General A. Mitchell Palmer, resulted in the arrest and deportation of hundreds of individuals accused of being anarchists or communists, often with little evidence.",
                        options: [{ text: "Next", nextId: 4 }],
                    },
                    {
                        id: 4,
                        text: "Communism became a symbol of fear and disruption, used to justify government policies restricting immigration, suppressing unions, and deporting perceived radicals. These events left a lasting legacy of anti-communist sentiment in America.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 2,
            image: manifestoPamphlet,
            name: "Train Ticket",
            className: "pamphlet",
            dialogueData: {
                character: { name: "Communist Manifesto Pamphlet by Benjamin Gitlow" },
                dialogue: [
                    {
                        id: 1,
                        text: "The Left Wing Manifesto pamphlet, written by Benjamin Gitlow, was a call for socialist reforms and a critique of capitalism. Its publication and distribution led to Gitlow’s arrest under New York’s anarchy laws, making it a symbol of the tension between free speech and government control during the Red Scare.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "The rise of socialism and communism after the Russian Revolution heightened fears of radical political movements in the United States. The pamphlet outlined the need for revolutionary change, advocating for workers to seize power and dismantle capitalist systems. The government, already on high alert for anarchist or communist activity, viewed such rhetoric as a threat to national security. Gitlow’s trial (Gitlow v. New York) became a landmark case that questioned the limits of free speech, as the Supreme Court upheld his conviction but also established the precedent that the First Amendment applied to state governments through the incorporation doctrine.",
                        options: [],
                    },
                    {
                        id: 3,
                        text: "The Left Wing Manifesto pamphlet underscored the growing divide between those advocating for labor rights and economic equality and a government increasingly determined to suppress radical ideologies. Gitlow’s case highlighted the conflict between protecting civil liberties and maintaining national security during times of fear and unrest. The crackdown on socialist literature and speech during the Red Scare reflected broader societal anxieties about communism, labor unrest, and the changing economic order.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 3,
            image: bioTextbook,
            name: "Photograph",
            className: "textbook",
            dialogueData: {
                character: { name: "Biology Textbook - Scopes Trial" },
                dialogue: [
                    {
                        id: 1,
                        text: "A biology textbook symbolizes the Scopes Trial, which represents the controversy surrounding teaching evolution in public schools. This 1925 landmark legal case became a national debate over science, religion, and education.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "In 1925, Tennessee passed the Butler Act, prohibiting the teaching of evolution in public schools. High school teacher John T. Scopes was accused of violating this law by using a textbook that included Darwin’s theory of evolution. The trial, also known as the \"Monkey Trial,\" pitted two prominent figures against each other: William Jennings Bryan, representing religious fundamentalism, and Clarence Darrow, defending modern science and academic freedom. The trial became a spectacle, drawing national attention and igniting debates about the role of religion and science in American society.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "Although Scopes was found guilty and fined, the trial was a symbolic victory for proponents of scientific thought and free speech. It highlighted the growing tensions between traditional religious values and modernist perspectives in the 1920s. The Scopes Trial also exposed the divide between rural and urban America, where rural areas clung to conservative values while urban centers embraced progressive change.",
                        options: [{ text: "Next", nextId: 4 }],
                    },
                    {
                        id: 4,
                        text: "The biology textbook remains a symbol of the struggle for intellectual freedom and the ongoing debate between faith and science in the education system.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 4,
            image: npc,
            name: "Eleanor Wright, ACLU Advocate",
            className: "npc",
            dialogueData: {
                character: { name: "Eleanor" },
                dialogue: [
                    {
                        id: 1,
                        text: "In 1919, fear swept this country like wildfire. The government went after immigrants, anarchists, and anyone they thought might stir up trouble. They called it the Red Scare.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "Folks were arrested, deported, and their rights stripped away—all without real evidence. That’s why I joined the ACLU. We fought back against those Palmer Raids.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "Take the Sacco and Vanzetti case, for example. Two Italian immigrants, accused of murder with barely any proof. It wasn’t justice—it was fear and prejudice.",
                        options: [{ text: "Next", nextId: 4 }],
                    },
                    {
                        id: 4,
                        text: "The ACLU worked to defend them and many others. We wrote articles, took cases to court, and stood up for those who couldn’t fight for themselves.",
                        options: [{ text: "Next", nextId: 5 }],
                    },
                    {
                        id: 5,
                        text: "It wasn’t easy, but we knew that without rights, none of us were truly free.",
                        options: [
                            { text: "What sparked the Palmer Raids in the early 1920s?", nextId: 6 },
                            { text: "How did the ACLU respond to the Palmer Raids?", nextId: 7 },
                            { text: "Why were the Palmer Raids controversial?", nextId: 8 },
                        ],
                    },
                    {
                        id: 6,
                        text: "The Palmer Raids were fueled by the Red Scare, a fear of communism and radicalism following the Russian Revolution, labor strikes, and anarchist bombings in the United States.",
                        options: [{ text: "Go Back", nextId: 5 }],
                    },
                    {
                        id: 7,
                        text: "The ACLU opposed the raids, which often violated civil liberties by arresting and deporting individuals without proper evidence or due process. They worked to defend those targeted and raised awareness of government overreach.",
                        options: [{ text: "Go Back", nextId: 5 }],
                    },
                    {
                        id: 8,
                        text: "The raids targeted immigrants and radicals without substantial evidence, leading to widespread deportations and arrests that many viewed as unconstitutional and driven by xenophobia.",
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
            <div className="socialism-page">
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

export default Socialism;
