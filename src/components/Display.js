import React, { useContext, useEffect, useState } from "react";
import { gameContext } from "./ContextProvider";
import { LoadingOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

export const Display = () => {
  const { ai, loading, userMove, setScore, score, games } = useContext(
    gameContext
  );
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (userMove && userMove.toLowerCase() === ai) {
      setResult("Tie");
      return;
    }
    switch (userMove) {
      case "Scissors": {
        if (ai === "paper") {
          setResult("You Win!");
          setScore((score) => score + 1);
        } else {
          setResult("You lose!");
        }
        break;
      }
      case "Stone": {
        if (ai === "scissors") {
          setResult("You Win!");
          setScore((score) => score + 1);
        } else {
          setResult("You lose!");
        }
        break;
      }
      case "Paper": {
        if (ai === "stone") {
          setResult("You Win!");
          setScore((score) => score + 1);
        } else {
          setResult("You lose!");
        }
        break;
      }
      default:
        return null;
    }
  }, [userMove, ai, setScore]);

  return (
    <div>
      <div
        style={{
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        {loading ? (
          <LoadingOutlined style={{ fontSize: 48, color: "gray" }} />
        ) : (
          <Title level={3}>AI move! {ai} </Title>
        )}
      </div>
      <div>
        <Title level={3}>Your Score: {score} </Title>
      </div>
      <div>
        <Title level={3}>Games Played: {games} </Title>
      </div>
      <div
        style={{
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        {loading ? (
          "Loading..."
        ) : (
          <Title level={2} style={{ color: "green" }}>
            {result}
          </Title>
        )}
      </div>
    </div>
  );
};
