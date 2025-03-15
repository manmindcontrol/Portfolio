"use client";

import { useEffect, useRef, useState } from "react";

const PongGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameActive, setGameActive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 400;

    const paddleWidth = 10,
      paddleHeight = 80;
    let leftPaddleY = (canvas.height - paddleHeight) / 2;
    let rightPaddleY = (canvas.height - paddleHeight) / 2;
    let ballX = canvas.width / 2,
      ballY = canvas.height / 2;
    let ballSpeedX = 4,
      ballSpeedY = 4;
    let leftPaddleSpeed = 0,
      rightPaddleSpeed = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
      ctx.fillRect(
        canvas.width - paddleWidth,
        rightPaddleY,
        paddleWidth,
        paddleHeight
      );
      ctx.beginPath();
      ctx.arc(ballX, ballY, 8, 0, Math.PI * 2);
      ctx.fill();
    };

    const update = () => {
      if (!gameActive) return;

      leftPaddleY += leftPaddleSpeed;
      rightPaddleY += rightPaddleSpeed;

      leftPaddleY = Math.max(
        0,
        Math.min(canvas.height - paddleHeight, leftPaddleY)
      );
      rightPaddleY = Math.max(
        0,
        Math.min(canvas.height - paddleHeight, rightPaddleY)
      );

      ballX += ballSpeedX;
      ballY += ballSpeedY;

      if (ballY <= 0 || ballY >= canvas.height) ballSpeedY *= -1;
      if (
        (ballX <= paddleWidth &&
          ballY > leftPaddleY &&
          ballY < leftPaddleY + paddleHeight) ||
        (ballX >= canvas.width - paddleWidth &&
          ballY > rightPaddleY &&
          ballY < rightPaddleY + paddleHeight)
      ) {
        ballSpeedX *= -1;
      }

      if (ballX < 0 || ballX > canvas.width) {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
      }
    };

    const gameLoop = () => {
      update();
      draw();
      requestAnimationFrame(gameLoop);
    };
    gameLoop();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "w") leftPaddleSpeed = -5;
      if (e.key === "s") leftPaddleSpeed = 5;
      if (e.key === "ArrowUp") rightPaddleSpeed = -5;
      if (e.key === "ArrowDown") rightPaddleSpeed = 5;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "w" || e.key === "s") leftPaddleSpeed = 0;
      if (e.key === "ArrowUp" || e.key === "ArrowDown") rightPaddleSpeed = 0;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameActive]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-white text-2xl mb-4">Pong Game</h1>
      <canvas ref={canvasRef} className="border border-white" />
      <button
        onClick={() => setGameActive(!gameActive)}
        className="mt-4 bg-white text-black px-4 py-2 rounded"
      >
        {gameActive ? "Pause" : "Resume"}
      </button>
    </div>
  );
};

export default PongGame;
