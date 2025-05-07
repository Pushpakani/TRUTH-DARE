"use client";
import { useEffect, useState } from "react";

export default function Timer({ seconds, onEnd }) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    if (time === 0) {
      onEnd();
      return;
    }
    const interval = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [time, onEnd]);

  // Progress bar width
  const percent = (time / seconds) * 100;

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">Time Left</span>
        <span className="text-sm font-bold text-red-600">{time}s</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-red-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
