/**************************
 * IMPORTS
 ***************************/
import { React, useState } from "react";

// components
import FirstStage from "../components/practice-options/FirstStage";
import SecondStage from "../components/practice-options/SecondStage";
import ThirdStage from "../components/practice-options/ThirdStage";

/**************************
 * CONFIG
 ***************************/

const PracticePage = () => {
  const [stage, setStage] = useState(1);

  let cardText;

  if (stage === 1) {
    cardText = <FirstStage />;
  } else if (stage === 2) {
    cardText = <SecondStage />;
  } else {
    cardText = <ThirdStage />;
  }

  return (
    <main className="h-main flex flex-wrap flex-col items-center">
      <h1 className="text-4xl bold mt-12 font-bold">Start praticing!</h1>
      <div className="h-80 w-4/5 bg-cardColor rounded-3xl mt-16">
        <div className="m-8">{cardText}</div>
      </div>
    </main>
  );
};

export default PracticePage;
