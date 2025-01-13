import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LevelsPage.css';

import playerSprite1 from '../images/player_price1.png';
import playerSprite2 from '../images/player_price2.png';
import playerSprite3 from '../images/player_price3.png';
import playerSprite4 from '../images/player_price4.png';

import elevator1 from '../images/elevator1.png';
import elevator2 from '../images/elevator2.png';
import elevator3 from '../images/elevator3.png';

const LevelsPage = ({ currentFloor, setCurrentFloor }) => {
    const [playerPosition, setPlayerPosition] = useState({ x: 100 });
    const [currentSprite, setCurrentSprite] = useState(playerSprite1);
    const [walkingDirection, setWalkingDirection] = useState('right');
    const [isWalking, setIsWalking] = useState(false);
    const navigate = useNavigate();

    const floorsYPositions = {
        1: 15,
        2: 195,
        3: 375,
    };

    const playerYPositions = {
        1: 100,
        2: 280,
        3: 460,
    };

    const elevatorSprites = {
        1: elevator1,
        2: elevator2,
        3: elevator3,
    };

    const rooms = [
        { id: 'roomA1', floor: 1, x: 300, y: floorsYPositions[1], label: 'Great Migration', page: '/greatmigration' },
        { id: 'roomB1', floor: 1, x: 500, y: floorsYPositions[1], label: 'Socialism', page: '/socialism' },
        { id: 'roomA2', floor: 2, x: 300, y: floorsYPositions[2], label: 'Women + Prohibition', page: '/women' },
        { id: 'roomB2', floor: 2, x: 500, y: floorsYPositions[2], label: 'Racial Intolerance', page: '/racialintolerance' },
        { id: 'roomA3', floor: 3, x: 200, y: floorsYPositions[3], label: 'Social Intolerance', page: '/socialintolerance' },
        { id: 'roomB3', floor: 3, x: 400, y: floorsYPositions[3], label: "Workers' Rights", page: '/workersrights' },
        { id: 'roomB4', floor: 3, x: 600, y: floorsYPositions[3], label: 'Theater', page: '/theatre' },
    ];

    const spriteFrames = [playerSprite1, playerSprite2, playerSprite3, playerSprite4];

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                setWalkingDirection('left');
                setIsWalking(true);
                setPlayerPosition((prev) => ({
                    ...prev,
                    x: Math.max(0, prev.x - 10),
                }));
                break;
            case 'ArrowRight':
                setWalkingDirection('right');
                setIsWalking(true);
                setPlayerPosition((prev) => ({
                    ...prev,
                    x: Math.min(750, prev.x + 10),
                }));
                break;
            default:
                break;
        }
    };

    const handleKeyUp = () => {
        setIsWalking(false);
    };

    const handleElevatorClick = () => {
        if (playerPosition.x >= 0 && playerPosition.x <= 150) { // Increased the range to 150
            navigate('/elevator'); // Redirect to ElevatorPage
        } else {
            alert('You need to be near the elevator to use it!');
        }
    };


    const handleRoomClick = (room) => {
        if (
            currentFloor === room.floor &&
            playerPosition.x >= room.x - 100 &&
            playerPosition.x <= room.x + 100
        ) {
            navigate(room.page);
        } else {
            alert('You need to be closer to the room to enter it!');
        }
    };

    useEffect(() => {
        if (isWalking) {
            const animationInterval = setInterval(() => {
                setCurrentSprite((prev) => {
                    const currentIndex = spriteFrames.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % spriteFrames.length;
                    return spriteFrames[nextIndex];
                });
            }, 220);
            return () => clearInterval(animationInterval);
        } else {
            setCurrentSprite(spriteFrames[0]);
        }
    }, [isWalking]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <div className="levels-page">
            {/* Player */}
            <div
                className="player"
                style={{
                    left: `${playerPosition.x}px`,
                    top: `${playerYPositions[currentFloor]}px`,
                    transform: walkingDirection === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
                    backgroundImage: `url(${currentSprite})`,
                }}
            ></div>

            {/* Elevator */}
            <div
                className="elevator"
                onClick={handleElevatorClick}
                style={{
                    left: '50px', // Keep static elevator position
                    top: '170px', // Static elevator position
                    backgroundImage: `url(${elevatorSprites[currentFloor]})`,
                }}
            ></div>

            {/* Rooms */}
            <div className="rooms">
                {rooms.map((room) => (
                    <div
                        key={room.id}
                        className="room"
                        onClick={() => handleRoomClick(room)}
                        style={{
                            left: `${room.x}px`,
                            top: `${room.y}px`,
                        }}
                    >
                        <span>{room.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LevelsPage;
