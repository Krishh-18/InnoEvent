import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["better", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
              events with <span className="text-white font-bold"> Eventa </span>
              <br />
              <a href="/" className="font-normal bg-gray-300 bg-opacity-15 text-white text-xl rounded-lg px-4 py-3">Create Event 🡕</a>
        </div>
    </div>
  );
}
