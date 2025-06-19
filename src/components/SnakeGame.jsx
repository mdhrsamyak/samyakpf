import { useEffect, useRef, useState } from "react";

const canvasSize = { width: 500, height: 500 };
const initialSnake = [
  { x: 8, y: 7 },
  { x: 7, y: 7 },
];
const initialDirection = { x: 1, y: 0 };
const blockSize = 20;
const speed = 100;

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(generateFood(initialSnake));
  const [direction, setDirection] = useState(initialDirection);
  const [gameOver, setGameOver] = useState(false);

  // Direction queue
  const directionQueue = useRef([]);

  // Prevent arrow key from scrolling the page
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();

        const newDir = getDirectionFromKey(e.key);
        const lastDir =
          directionQueue.current.length > 0
            ? directionQueue.current[directionQueue.current.length - 1]
            : direction;

        // Prevent reversing
        if (!isOppositeDirection(lastDir, newDir)) {
          directionQueue.current.push(newDir);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  // Main game loop
  useEffect(() => {
    let gameLoop;

    const step = () => {
      setSnake((prevSnake) => {
        // Use next queued direction if available
        const nextDirection =
          directionQueue.current.length > 0
            ? directionQueue.current.shift()
            : direction;

        setDirection(nextDirection);

        return moveSnake(prevSnake, nextDirection);
      });

      gameLoop = setTimeout(() => requestAnimationFrame(step), speed);
    };

    if (!gameOver) {
      step();
    }

    return () => clearTimeout(gameLoop);
  }, [direction, gameOver]);

  useEffect(() => {
    drawGame();
  }, [snake, food]);

  // Move snake logic
  const moveSnake = (snake, currentDirection) => {
    const newHead = {
      x: snake[0].x + currentDirection.x,
      y: snake[0].y + currentDirection.y,
    };

    const collision =
      newHead.x < 0 ||
      newHead.y < 0 ||
      newHead.x >= canvasSize.width / blockSize ||
      newHead.y >= canvasSize.height / blockSize ||
      snake.some((seg) => seg.x === newHead.x && seg.y === newHead.y);

    if (collision) {
      setGameOver(true);
      return initialSnake;
    }

    const newSnake = [newHead, ...snake];
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(generateFood(newSnake));
    } else {
      newSnake.pop();
    }

    return newSnake;
  };

  // Draw everything
  const drawGame = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);

    // Snake
    ctx.fillStyle = "lime";
    snake.forEach(({ x, y }) => {
      ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
    });

    // Food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * blockSize, food.y * blockSize, blockSize, blockSize);
  };

  // Utility: Convert key to direction
  const getDirectionFromKey = (key) => {
    switch (key) {
      case "ArrowUp":
        return { x: 0, y: -1 };
      case "ArrowDown":
        return { x: 0, y: 1 };
      case "ArrowLeft":
        return { x: -1, y: 0 };
      case "ArrowRight":
        return { x: 1, y: 0 };
      default:
        return direction;
    }
  };

  // Utility: Prevent reversing into self
  const isOppositeDirection = (dir1, dir2) => {
    return dir1.x + dir2.x === 0 && dir1.y + dir2.y === 0;
  };

  // Utility: Food generator
  function generateFood(snake) {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * (canvasSize.width / blockSize)),
        y: Math.floor(Math.random() * (canvasSize.height / blockSize)),
      };
    } while (
      snake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  }

  return (
    <div className="flex flex-col items-center bg-black min-h-screen pt-4">
      <h1 className="text-xl text-white font-bold mb-2">Snake Game</h1>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        className="border-4 border-white bg-black"
      />
      {gameOver && (
        <p className="text-red-600 mt-2">Game Over! Refresh to play again.</p>
      )}
    </div>
  );
}
