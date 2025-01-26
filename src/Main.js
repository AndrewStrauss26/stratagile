import React from "react";
import { Routes, Route } from "react-router-dom";
import TimerPage from "./Pages/Timer/TimerPage";
import Circle from "./Pages/circles/Circles";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Circle />} />
            <Route path="/timer" element={<TimerPage />} />
        </Routes>
    )
}

export default Main;