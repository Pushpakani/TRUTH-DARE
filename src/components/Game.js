"use client";
import { useState } from "react";
import { truths, dares } from "../data/Questions";
import Timer from "../components/Timer";

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Game({ players, onRestart }) {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [question, setQuestion] = useState("");
  const [mode, setMode] = useState(""); // "truth" or "dare"
  const [showButtons, setShowButtons] = useState(true);

  // Start a new round
  const startRound = () => {
    setMode("");
    setQuestion("");
    setShowButtons(true);
    setCurrentPlayer(getRandom(players));
  };

  // Handle Truth or Dare selection
  const handleChoice = (choice) => {
    setMode(choice);
    setShowButtons(false);
    setQuestion(choice === "truth" ? getRandom(truths) : getRandom(dares));
  };

  // Handle Skip (from truth to dare)
  const handleSkip = () => {
    setMode("dare");
    setQuestion(getRandom(dares));
    setShowButtons(false);
  };

  // Start first round on mount
  if (currentPlayer === null) {
    startRound();
    return null;
  }

  function handleSkipOrAutoNext() {
    if (mode === "truth") {
      setMode("dare");
      setQuestion(getRandom(dares));
      setShowButtons(false);
    } else {
      startRound();
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        It's <span className="text-purple-600">{currentPlayer.name}</span>'s
        turn!
      </h2>
      <div className="text-8xl mb-4">{currentPlayer.emoji}</div>
      {mode === "" && showButtons && (
        <div className="space-x-4">
          <button
            onClick={() => handleChoice("truth")}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Truth
          </button>
          <button
            onClick={() => handleChoice("dare")}
            className="px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">
            Dare
          </button>
        </div>
      )}
      {mode && (
        <div className="mt-6">
          <div className="text-lg font-semibold mb-4">
            {mode === "truth" ? "Truth:" : "Dare:"}
          </div>
          <div className="bg-gray-100 px-4 py-6 rounded text-gray-800 font-medium mb-6">
            {question}
          </div>
          <Timer seconds={20} onEnd={handleSkipOrAutoNext} />
          {mode === "truth" && (
            <button
              onClick={handleSkip}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition mb-4">
              Skip (Get a Dare)
            </button>
          )}
          <button
            onClick={startRound}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition ml-2">
            Next Turn
          </button>
        </div>
      )}
      <button
        onClick={onRestart}
        className="mt-8 text-sm text-gray-500 underline hover:text-gray-700">
        Restart Game
      </button>
    </div>
  );
}
