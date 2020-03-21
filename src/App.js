import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import { Container, Timer, Button, Reset } from "./styles";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [label, setLabel] = useState("Iniciar");

  useEffect(() => {
    if (isRunning) {
      setLabel(label => "Pausar");
      const id = setInterval(() => {
        setTimer(timer => timer + 0.1);
      }, 100);
      setIntervalId(id);
    } else {
      intervalId !== null ? setLabel(label => "Continuar") : setLabel(label);

      clearInterval(intervalId);
    }
  }, [isRunning]);


  return (
    <>
      <Container>
        <Timer>{timer === 0 ? "0.0" : timer.toFixed(1)}</Timer>
        <Button
          onClick={() =>
            isRunning === false ? setIsRunning(true) : setIsRunning(false)
          }
        >
          {label}
        </Button>

        <Reset onClick={() => {setIsRunning(false); setTimer(0);}}>Reset</Reset>
      </Container>

      <GlobalStyle />
    </>
  );
}
