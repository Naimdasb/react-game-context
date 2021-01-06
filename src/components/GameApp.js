import React, { useState } from "react";
import { Display } from "./Display";
import { Controls } from "./Controls";
import { GameContextProvider } from "./ContextProvider";

const plays = ["stone", "scissors", "paper"];

export const GameApp = () => {
  const [ai, setAi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userMove, setUserMove] = useState(null);
  const [score, setScore] = useState(0);
  const [games, setGames] = useState(0);

  const generateAiMove = () => {
    let index = Math.floor(Math.random() * 3);
    setAi(plays[index]);
    setLoading(false);
  };

  return (
    <div>
      <GameContextProvider
        value={{
          ai,
          generateAiMove,
          loading,
          setLoading,
          setUserMove,
          userMove,
          setScore,
          score,
          setGames,
          games
        }}
      >
        <Display />
        <Controls />
      </GameContextProvider>
    </div>
  );
};
