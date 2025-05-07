"use client";
import { useState } from "react";

const emojiAvatars = [
  "😎",
  "🤖",
  "👻",
  "🐱",
  "🐵",
  "🦄",
  "🐸",
  "🐙",
  "🦊",
  "🐯",
];

export default function PlayerInput({ onSubmit }) {
  const [players, setPlayers] = useState([
    { name: "", emoji: emojiAvatars[0] },
  ]);

  const handleNameChange = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index].name = value;
    setPlayers(newPlayers);
  };

  const handleEmojiChange = (index, emoji) => {
    const newPlayers = [...players];
    newPlayers[index].emoji = emoji;
    setPlayers(newPlayers);
  };

  const addPlayer = () =>
    setPlayers([...players, { name: "", emoji: emojiAvatars[0] }]);

  const removePlayer = (index) =>
    setPlayers(players.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = players.filter((p) => p.name.trim() !== "");
    onSubmit(filtered);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mx-auto max-w-xl px-4">
      <h2 className="text-md sm:text-lg md:text-2xl font-bold mb-4 text-center">
        Enter Player Names & Choose Emoji Avatar
      </h2>

      {players.map((player, i) => (
        <div key={i} className="flex flex-wrap items-center gap-2 sm:gap-4">
          <input
            type="text"
            placeholder={`Player ${i + 1}`}
            value={player.name}
            onChange={(e) => handleNameChange(i, e.target.value)}
            required
            className="px-3 py-2 border rounded flex-1 min-w-[100px]"
          />

          <select
            value={player.emoji}
            onChange={(e) => handleEmojiChange(i, e.target.value)}
            className="text-lg md:text-2xl px-2 py-1 border rounded">
            {emojiAvatars.map((emoji, idx) => (
              <option key={idx} value={emoji}>
                {emoji}
              </option>
            ))}
          </select>

          <span className="text-xl md:text-3xl">{player.emoji}</span>

          {players.length > 1 && (
            <button
              type="button"
              onClick={() => removePlayer(i)}
              className="text-red-500 font-bold text-lg md:text-xl">
              &times;
            </button>
          )}
        </div>
      ))}

      <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-4 text-md md:text-xl">
        <button
          type="button"
          onClick={addPlayer}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto">
          Add Player
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full sm:w-auto">
          Start Game
        </button>
      </div>
    </form>
  );
}
