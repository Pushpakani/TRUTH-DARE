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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Enter Player Names & Choose Emoji Avatar
      </h2>
      {players.map((player, i) => (
        <div key={i} className="flex items-center space-x-4">
          <input
            type="text"
            placeholder={`Player ${i + 1}`}
            value={player.name}
            onChange={(e) => handleNameChange(i, e.target.value)}
            required
            className="flex-1 px-3 py-2 border rounded"
          />
          <select
            value={player.emoji}
            onChange={(e) => handleEmojiChange(i, e.target.value)}
            className="text-2xl">
            {emojiAvatars.map((emoji, idx) => (
              <option key={idx} value={emoji}>
                {emoji}
              </option>
            ))}
          </select>
          <span className="text-3xl">{player.emoji}</span>
          {players.length > 1 && (
            <button
              type="button"
              onClick={() => removePlayer(i)}
              className="text-red-500 font-bold text-xl">
              &times;
            </button>
          )}
        </div>
      ))}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={addPlayer}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Player
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Start Game
        </button>
      </div>
    </form>
  );
}
