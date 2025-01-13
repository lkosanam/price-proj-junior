import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialogue from "./Dialogue"; // Import the Dialogue component
import "../styles/greatmigration.css"; // Import CSS for styling
import trialImg from "../images/trialflyer.png"; // Path to the image
import quotaact from "../images/document.png"; // Path to the image
import literacy from "../images/sharecropper.png"; // Path to the image
import npc from "../images/npc.png";

const SocialIntolerance = () => {
    const [selectedArtifactId, setSelectedArtifactId] = useState(null); // Track selected artifact
    const [dialogueData, setDialogueData] = useState(null); // Store dialogue data
    const navigate = useNavigate(); // Hook for navigation

    // Define artifacts data
    const artifacts = [
        {
            id: 1,
            image: literacy,
            name: "Boll Weevil",
            className: "literacy",
            dialogueData: {
                character: { name: "Sacco and Vanzetti Trial Flyer" },
                dialogue: [
                    {
                        id: 1,
                        text: "A flyer about the Sacco and Vanzetti Trial symbolizes the social intolerance, xenophobia, and fear of anarchism that characterized the 1920s. Nicola Sacco and Bartolomeo Vanzetti, Italian immigrants and self-proclaimed anarchists, were arrested in 1920 for robbery and murder, convicted, and executed in 1927. Their trial became a global symbol of injustice.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "The trial occurred during the Red Scare, a time when fear of communism and anarchism gripped the United States. Sacco and Vanzetti were not only scrutinized for the crimes they were accused of but also vilified for their political beliefs and immigrant status. Evidence against them was weak, but the public and judicial bias against immigrants and radicals sealed their fate. The trial reflected broader societal fears of the growing labor movement and revolutionary ideas associated with immigrants from Southern and Eastern Europe.",
                        options: [],
                    },
                    {
                        id: 3,
                        text:"The case highlighted the deep-seated xenophobia and prejudice against \"new immigrants\" in the U.S. It also sparked international protests and debates about justice, fairness, and the role of political bias in the legal system. Sacco and Vanzetti's execution underscored the dangers of intolerance and the limitations of civil liberties during times of fear and unrest. The flyer remains a powerful reminder of the consequences of societal and institutional bias.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 2,
            image: quotaact,
            name: "Train Ticket",
            className: "quota",
            dialogueData: {
                character: { name: "Emergency Quota Act & National Origins Act" },
                dialogue: [
                    {
                        id: 1,
                        text: "These two legislative acts—the Emergency Quota Act of 1921 and the National Origins Act of 1924—symbolized the U.S. government's efforts to limit immigration during a time of intense xenophobia and social intolerance. They established quotas to restrict the number of immigrants from Southern and Eastern Europe, favoring \"old immigrants\" from Northern and Western Europe.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text:"Following World War I, a surge in immigration from Southern and Eastern Europe heightened fears among native-born Americans of cultural and economic disruption. The acts were influenced by eugenics and Social Darwinism, which falsely argued that people from certain regions were biologically inferior. The Emergency Quota Act limited immigration to 3% of each nationality's population based on the 1910 census, while the National Origins Act reduced the quota to 2% of the 1890 census, severely curtailing immigration from countries like Italy, Poland, and Russia. Asians were almost entirely excluded under these laws. These acts were directly tied to the distinction between \"Old Immigrants\" (from Northern and Western Europe) and \"New Immigrants\" (from Southern and Eastern Europe). The fear of \"New Immigrants\" disrupting American culture and society was a driving force behind these restrictive immigration laws (Effact #7).",
                        options: [],
                    },
                    {
                        id: 3,
                        text: "These acts institutionalized racial and ethnic bias in U.S. immigration policy, shaping American demographics for decades. By favoring immigrants from Northern and Western Europe, they reinforced the idea of an \"ideal American\" and marginalized groups deemed \"undesirable.\" These restrictions also contributed to the isolationism and nativism of the 1920s, stifling cultural diversity and innovation. The laws symbolized the lasting impact of xenophobia in shaping public policy.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 3,
            image: trialImg,
            name: "Photograph",
            className: "trial",
            dialogueData: {
                character: { name: "Literacy Test for Immigrants" },
                dialogue: [
                    {
                        id: 1,
                        text: "The literacy test was a tool used to restrict immigration by requiring immigrants to demonstrate their ability to read and write in their native language or English. It became a symbol of the nativist sentiment and social intolerance of the early 20th century.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "Literacy tests were first proposed in the late 19th century and became federal law with the Immigration Act of 1917, targeting immigrants from Southern and Eastern Europe. Nativists argued that illiterate immigrants were less likely to assimilate and more likely to become public burdens. However, these tests disproportionately affected groups already marginalized by poverty and lack of access to education in their home countries. The tests were part of a broader effort to favor \"desirable\" immigrants and limit those viewed as culturally or racially inferior.",
                        options: [],
                    },
                    {
                        id: 3,
                        text: "The literacy test reinforced the exclusion of immigrants based on economic and educational factors, furthering the divide between \"old\" and \"new\" immigrants. It reflected the broader societal fears of cultural change and economic competition, particularly during periods of high unemployment or social unrest. While the test was less explicitly racist than quota systems, it still perpetuated inequality and discrimination under the guise of meritocracy. It remains a symbol of how education and language have been used as barriers to entry and acceptance in American society.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 4,
            image: npc, // Replace with the path to Bartolomeo's image
            name: "Bartolomeo Vanzetti",
            className: "npc",
            dialogueData: {
                character: { name: "Bartolomeo Vanzetti" },
                dialogue: [
                    {
                        id: 1,
                        text: "I was just a poor man, an immigrant from Italia, sellin’ fish on the streets, tryin’ to make a life in America. But in 1920, they arrested me and my friend Nicola Sacco for robbery and murder. Eh, did we do it? No, no! But to them, it didn’t matter.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "We were anarchists, speakin’ out for the workers, and, worse, we were Italians. To them, we were guilty just for who we were. The trial? Ah, it was not a trial, it was a show. The evidence against us was weak, nothin’ solid.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "But the judge, the jury—they hated us before they even heard the case. Why? Because of fear! It was the Red Scare. They were afraid of communists, anarchists, of immigrants like us. To them, we were dangerous just because we believed in a better world for the workers.",
                        options: [{ text: "Next", nextId: 4 }],
                    },
                    {
                        id: 4,
                        text: "They executed us in 1927, even after years of protest from people all over the world. But our case, it became somethin’ bigger than us. It showed the hatred and fear that ran deep in this country. People saw it as a symbol of injustice, of what happens when prejudice takes the place of fairness.",
                        options: [
                            { text: "What was the central issue in the Sacco and Vanzetti trial?", nextId: 5 },
                            { text: "How did the trial reflect the fears of the time?", nextId: 6 },
                            { text: "Why has the Sacco and Vanzetti trial become such a powerful symbol?", nextId: 7 },
                        ],
                    },
                    {
                        id: 5,
                        text: "The trial? It was never about the crime. It was about fear. Fear of immigrants, fear of anarchists, fear of ideas that challenged their system. They wanted to use us to send a message.",
                        options: [{ text: "Go Back", nextId: 4}],
                    },
                    {
                        id: 6,
                        text: "Ah, it was the Red Scare. The people were terrified of revolution, of change. Immigrants like us, from Southern Europe, we were the targets. They saw us as a threat just because of who we were and what we believed.",
                        options: [{ text: "Go Back", nextId: 4 }],
                    },
                    {
                        id: 7,
                        text: "Because it showed the world the injustice—the hate and prejudice that decided our fate. It reminds people of the dangers of fear and intolerance. It is a warning, eh? Never let fear control the law.",
                        options: [{ text: "Go Back", nextId: 4}],
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
            <div className="social-page">
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

export default SocialIntolerance;
