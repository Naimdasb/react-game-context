import React, { useContext } from "react";
import { Button } from "antd";
import { gameContext } from "./ContextProvider";

export const Controls = () => {
  const { generateAiMove, loading, setLoading, setUserMove } = useContext(
    gameContext
  );

  const handleClick = (e) => {
    setLoading(true);
    setUserMove(e.target.textContent);
    setTimeout(() => generateAiMove(e.target.textContent), 1000);
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick} disabled={loading}>
        Stone
      </Button>
      <Button type="primary" onClick={handleClick} disabled={loading}>
        Scissors
      </Button>
      <Button type="primary" onClick={handleClick} disabled={loading}>
        Paper
      </Button>
    </div>
  );
};
