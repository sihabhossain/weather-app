import React from "react";
import TopButton from "./Components/TopButton";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempretureAndDetails from "./Components/TempretureAndDetails";

const App = () => {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton></TopButton>
      <Inputs></Inputs>

      <TimeAndLocation></TimeAndLocation>
      <TempretureAndDetails></TempretureAndDetails>
    </div>
  );
};

export default App;
