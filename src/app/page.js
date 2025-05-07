"use client";
import { useState } from "react";
import PlayerInput from "../components/PlayerInput";
import Game from "../components/Game";

export default function Home() {
  const [players, setPlayers] = useState([]);

  const handleStart = (names) => setPlayers(names);
  const handleRestart = () => setPlayers([]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 flex flex-col justify-center items-center">
      <h1 className="mx-auto text-4xl font-extrabold text-purple-700 mt-8 mb-4 drop-shadow-lg">
        🔥 Truth or Dare Game 🔥
      </h1>
      {!players.length ? (
        <PlayerInput onSubmit={handleStart} />
      ) : (
        <Game players={players} onRestart={handleRestart} />
      )}
      <footer className="mt-12 text-gray-400 text-xs">
        © {new Date().getFullYear()} Truth or Dare Game
      </footer>
    </main>
  );
}
