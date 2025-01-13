import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LevelsPage from "./components/LevelsPage";
import ElevatorPage from "./components/ElevatorPage";
import GreatMigration from "./components/GreatMigration";
import Socialism from "./components/Socialism";
import WomenProhibition from "./components/WomenProhibition";
import RacialIntolerance from "./components/RacialIntolerance";
import SocialIntolerance from "./components/SocialIntolerance";
import WorkersRights from "./components/WorkersRights";
import HomePage from "./components/HomePage";
import EssentialQuestions from "./components/EssentialQuestions.js";
import Theatre from "./components/Theatre";

const App = () => {
    const [currentFloor, setCurrentFloor] = useState(1); // Track current floor

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route path="/eqs" element={<EssentialQuestions />} />
                <Route
                    path="/levels"
                    element={<LevelsPage currentFloor={currentFloor} setCurrentFloor={setCurrentFloor} />}
                />
                <Route
                    path="/elevator"
                    element={<ElevatorPage setCurrentFloor={setCurrentFloor} />}
                />
                <Route path="/greatmigration" element={<GreatMigration />} />
                <Route path="/socialism" element={<Socialism />} />
                <Route path="/women" element={<WomenProhibition />} />
                <Route path="/racialintolerance" element={<RacialIntolerance />} />
                <Route path="/socialintolerance" element={<SocialIntolerance />} />
                <Route path="/workersrights" element={<WorkersRights />} />
                <Route path="/theatre" element={<Theatre />} />




            </Routes>
        </Router>
    );
};

export default App;
