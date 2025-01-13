import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ElevatorPage.css';

const ElevatorPage = ({ setCurrentFloor }) => {
    const navigate = useNavigate();

    const handleFloorSelect = (floor) => {
        setCurrentFloor(floor); // Update floor state
        navigate('/levels'); // Redirect to LevelsPage
    };

    return (
        <div className="general-container">
            <div className="title">
                <h1>Select Your Floor</h1>
            </div>
            <div className="elevator-page">
                <button className="elevatorButton" onClick={() => handleFloorSelect(1)}>3</button>
                <button className="elevatorButton" onClick={() => handleFloorSelect(2)}>2</button>
                <button className="elevatorButton" onClick={() => handleFloorSelect(3)}>1</button>
            </div>
        </div>
    );
};

export default ElevatorPage;
