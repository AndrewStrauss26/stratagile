import React from "react";
import { Routes, Route } from "react-router-dom";
import QuizQuestion from "./Pages/QuizQuestion/QuizQuestion";
import NewTest from "./Pages/NewTest/NewTest";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<QuizQuestion />} />
            <Route path="/test" element={<NewTest />} />
        </Routes>
    )
}

export default Main;