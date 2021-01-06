import React, { useContext, useEffect, useState } from "react";
import { gameContext } from "./ContextProvider";
import { LoadingOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

export const Display = () => {
  const { ai, loading, userMove } = useContext(gameContext);
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
        } else {
          setResult("You lose!");
        }
        break;
      }
      case "Stone": {
        if (ai === "scissors") {
          setResult("You Win!");
        } else {
          setResult("You lose!");
        }
        break;
      }
      case "Paper": {
        if (ai === "stone") {
          setResult("You Win!");
        } else {
          setResult("You lose!");
        }
        break;
      }
      default:
        return null;
    }
  }, [userMove, ai]);
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
