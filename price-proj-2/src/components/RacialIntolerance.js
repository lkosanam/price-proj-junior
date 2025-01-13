import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialogue from "./Dialogue"; // Import the Dialogue component
import "../styles/greatmigration.css"; // Import CSS for styling
import kkkImage from "../images/kkk.png"; // Path to the image
import jimcrow from "../images/jimcrow.png"; // Path to the image
import newspaper from "../images/newspaperver2.png"; // Path to the image
import npc from "../images/aagirlnpc.png";


const RacialIntolerance = () => {
    const [selectedArtifactId, setSelectedArtifactId] = useState(null); // Track selected artifact
    const [dialogueData, setDialogueData] = useState(null); // Store dialogue data
    const navigate = useNavigate(); // Hook for navigation

    // Define artifacts data
    const artifacts = [
        {
            id: 1,
            image: kkkImage,
            name: "Boll Weevil",
            className: "kkkimg",
            dialogueData: {
                character: { name: "KKK Uniform" },
                dialogue: [
                    {
                        id: 1,
                        text: "The Ku Klux Klan (KKK) was a Protestant extremist, far-right hate group that has been characterized as America’s first terrorist group. Members of the group wore standard white costumes with pointed hats and masks to conceal their identities and terrify their enemies, while symbolizing the idea of a “pure” America. ",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "They burned crosses, publicly lynched targets, and set fire to buildings. They suppressed voters through intimidation and fear mongering. They patrolled polling places and threatened voters into supporting racist laws that advanced their initiatives. The Klan used parades, rallies, and propaganda campaigns to promote their ideology publicly under the guise of patriotism. THeir actions revealed their true purpose, however: to enforce segregation, silence dissent, and oppress those who didn’t fit their narrow definition of American identity.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "The Klan initially targeted African Americans, but their hate expanded to reach immigrants, Catholics, Jews, and anyone else who challenged their ideals. It had about 4 to 5 million members in the 1920s, reaching its peak.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 2,
            image: jimcrow,
            name: "Train Ticket",
            className: "jimcrow",
            dialogueData: {
                character: { name: "Jim Crow" },
                dialogue: [
                    {
                        id: 1,
                        text: "Jim Crow was a system of racial segregation and discrimination in the US that lasted from the Civil War era to 1968. These laws mandated segregation in schools, parks, libraries, and countless other public spaces. People who defied these laws faced arrest, fines, jail sentences, violence, and even death.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "“Whites Only” and “Colored” signs distinguished spaces where African Americans were welcome. All aspects of social life were to be strictly segregated, including places like sports teams and funeral parlors. These rules were upheld by the 1896 Supreme Court decision in Plessy v. Ferguson which established the doctrine of “separate but equal.” In reality, this doctrine grossly understated the severity and extremity of the discrimination imposed on African Americans.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "The situation worsened after WWI, as soldiers returning home opened up fierce competition for jobs. Intolerance towards African Americans and immigrants grew as a result of the Creel Commission during the war, which focused on national unity as a strictly white, Protestant, Anglo-Saxon ideal. (Effact #10)",
                        options: [{ text: "Next", nextId: 4 }],
                    },
                    {
                        id: 4,
                        text: "The oppressive nature of these laws was also a push factor that led to the Great Migration. While racial discrimination persisted in the north as well, northerners were far more tolerant to African Americans than southerners were. In urban America African Americans had a chance to better their own lives through education and skilled jobs.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 3,
            image: newspaper,
            name: "Photograph",
            className: "tullemassacre",
            dialogueData: {
                character: { name: "Tulsa Race Massacre Newspaper Clippings" },
                dialogue: [
                    {
                        id: 1,
                        text: "This newspaper depicts the Tulsa Race Massacre, one of the most devastating instances of racial violence in the US. A white mob attacked the African American neighborhood of Greenwood in Tulsa, Oklahoma, which was also known as “Black Wall Street.”",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "Dick Rowland, a 19-year-old African American was accused of assaulting a white woman named Sarah Page in 1921. Most, including Sarah herself, agree that Rowland accidentally stumbled into her in an elevator, but those who interpreted it as an assault used the opportunity to attack the community. Mobs looted and burned businesses and homes. Over 300 people were murdered and thousands were left homeless.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "Newspapers escalated violence by publishing headlines and editorials that dramatized Rowland’s “crime,” leading to African Americans to be labeled as aggressors. Others framed the events as a “race riot,” blaming the victims for the destruction. The massacre was excluded from mainstream media for decades, suppressing African American history in an effort to silence advocacy against discrimination.",
                        options: [],
                    },
                ],
            },
        },
        {
            id: 4,
            image: npc,
            name: "Miriam Johnson, African American Woman",
            className: "npc",
            dialogueData: {
                character: { name: "Miriam" },
                dialogue: [
                    {
                        id: 1,
                        text: "I grew up in Georgia, where Jim Crow ruled over everything we did. Black folks couldn’t vote, and violence was always just around the corner.",
                        options: [{ text: "Next", nextId: 2 }],
                    },
                    {
                        id: 2,
                        text: "My daddy was lynched by a mob for somethin’ he didn’t even do. That’s when I knew we had to leave. We packed up and moved to Harlem, like so many others did during the Great Migration.",
                        options: [{ text: "Next", nextId: 3 }],
                    },
                    {
                        id: 3,
                        text: "Life in the North was better in some ways. Up here, we could vote, and Harlem became a place where Black culture thrived—music, art, literature, all of it.",
                        options: [{ text: "Next", nextId: 4 }],
                    },
                    {
                        id: 4,
                        text: "But don’t think racism just disappeared. In 1919, the Red Summer proved that, with riots and mobs attackin’ Black folks, even in the North.",
                        options: [{ text: "Next", nextId: 5 }],
                    },
                    {
                        id: 5,
                        text: "Still, Harlem gave us somethin’ we didn’t have before—hope. It showed us what we could build when we came together, even when prejudice was all around us.",
                        options: [
                            { text: "How did the Ku Klux Klan gain prominence during the 1920s?", nextId: 6 },
                            { text: "What role did racial violence play in the 1920s?", nextId: 7 },
                            { text: "How did African Americans respond to racial intolerance during this time?", nextId: 8 },
                        ],
                    },
                    {
                        id: 6,
                        text: "The Klan came back strong in the 1920s. They didn’t just target Black folks this time—they went after immigrants, Catholics, and Jews too. They used fear and propaganda to grow their numbers, sayin’ they were protectin’ America from change. But really, they were just spreadin’ hate.",
                        options: [{ text: "Go Back", nextId: 5 }],
                    },
                    {
                        id: 7,
                        text: "Violence was everywhere. In 1919, they called it the Red Summer—white mobs attacked Black neighborhoods in places like Chicago and Washington, D.C. It wasn’t just the South anymore. That kind of hate showed us that racism could follow us wherever we went.",
                        options: [{ text: "Go Back", nextId: 5 }],
                    },
                    {
                        id: 8,
                        text: "We didn’t just sit back. We fought. The NAACP worked hard to fight lynchin’ and segregation in the courts, and Harlem became the heart of somethin’ new—the Harlem Renaissance. Through music, art, and literature, we celebrated who we were, showin’ the world our strength and creativity.",
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
            <div className="racial-page">
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

export default RacialIntolerance;
