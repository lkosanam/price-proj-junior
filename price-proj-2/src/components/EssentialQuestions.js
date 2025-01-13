import React, { useState } from "react";
import "../styles/greatmigration.css";

const EssentialQuestions = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null); // Track the active question
    const [currentSection, setCurrentSection] = useState(0); // Track the current section of the answer

    const questions = [
        {
            id: 1,
            title: "D2 - Understanding Multiple Perspectives",
            sections: [
                "The study of multiple perspectives reveals how societal fears and biases shape policies and actions, often to the detriment of marginalized groups. The Red Scare demonstrates how fear of communism and anarchism after World War I led to widespread suppression of civil liberties. Events like the Palmer Raids, during which suspected radicals were arrested and deported without due process, highlight the consequences of public hysteria overriding rational debate. By understanding the fear-driven policies of the Red Scare, such as the targeting of immigrants and labor unions, we can critically evaluate modern responses to political dissent and terrorism to ensure that civil liberties are upheld.",
                "Exploring belief systems such as those surrounding racial superiority and segregation further illustrates how entrenched ideologies perpetuate inequality. The Jim Crow laws enforced systemic racial segregation and discrimination, upheld by the 1896 Plessy v. Ferguson decision. These laws, along with repressive organizations like the Ku Klux Klan, illustrate how cultural and legal systems worked together to maintain racial hierarchies. By studying this historical context, we can better understand contemporary struggles against institutional racism and advocate for policies that promote equity and justice.",
                "Cultural shifts, such as those seen during the Scopes Trial, provide insight into the conflicts between tradition and progress. The trial exposed tensions between religious fundamentalism and modern scientific thought, sparking debates about the role of education and intellectual freedom. These tensions persist today, with ongoing disputes over curriculum content in schools. By examining these historical debates, we gain tools to navigate current controversies, balancing respect for diverse beliefs with the need to prepare future generations for a globalized and scientifically driven world.",
            ],
        },
        {
            id: 2,
            title: "A1 - Balancing Individual Needs and the Common Good",
            sections: [
                "Citizens and civic organizations have historically challenged government institutions to uphold the common good and protect individual rights. During the Great Migration, African Americans left the oppressive South, seeking opportunities and freedom in the North. Organizations like the NAACP worked to combat systemic racism, challenging discriminatory policies like the Jim Crow laws and advocating for equality. This interaction underscores the importance of collective action in holding institutions accountable for ensuring civil rights and promoting the welfare of all citizens.",
                "Government institutions have often struggled to balance fear-driven policies with the ideals of democracy and freedom. The Emergency Quota Act and National Origins Act reflect this tension, as these laws sought to limit immigration based on xenophobic beliefs rooted in eugenics and Social Darwinism. These policies favored Northern and Western European immigrants while restricting those from Southern and Eastern Europe, as well as Asians, under the guise of protecting American identity. These actions reveal the need for vigilance in ensuring that public policy aligns with the principles of inclusion and equality rather than fear and prejudice.",
                "At times, civic ideals have been advanced through public and judicial challenges to restrictive laws. For instance, the Scopes Trial highlighted the conflict between traditionalism and modernism in education, with the ACLU playing a pivotal role in defending intellectual freedom. Similarly, labor unions like the AFL advocated for better wages and working conditions, pushing back against exploitative practices supported by pro-business government policies. These examples show how the interaction between citizens, organizations, and institutions can promote both individual rights and the collective good, demonstrating the ongoing need for civic engagement and advocacy.",
            ],
        },
    ];

    const handleQuestionClick = (id) => {
        if (currentQuestion === id) {
            setCurrentQuestion(null); // Close the dialogue
            setCurrentSection(0); // Reset the section
        } else {
            setCurrentQuestion(id); // Open the dialogue
            setCurrentSection(0); // Start from the first section
        }
    };

    const handleNext = () => {
        if (currentQuestion !== null) {
            const question = questions.find((q) => q.id === currentQuestion);
            if (currentSection < question.sections.length - 1) {
                setCurrentSection(currentSection + 1);
            }
        }
    };

    const handlePrevious = () => {
        if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
        }
    };

    return (
        <div className="essential-questions-container">
            <h1>Essential Questions</h1>
            <div className="questions-list">
                {questions.map((question) => (
                    <div key={question.id} className="question">
                        <button onClick={() => handleQuestionClick(question.id)}>
                            {question.title}
                        </button>
                        {currentQuestion === question.id && (
                            <div className="dialogue-box">
                                <p>{question.sections[currentSection]}</p>
                                <div className="controls">
                                    <button onClick={handlePrevious} disabled={currentSection === 0}>
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={currentSection === question.sections.length - 1}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EssentialQuestions;
