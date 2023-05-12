import React, { useState } from "react";
import "./App.css";
function App() {
  const [position, setPosition] = useState({ row: 0, col: 0 });
  const [grid, setGrid] = useState([
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const handleMove = (direction) => {
    const x = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    switch (direction) {
      case "up":
        setPosition({ row: position.row, col: Math.max(0, position.col - 1) });
        break;
      case "down":
        setPosition({
          row: position.row,
          col: Math.min(x[0].length - 1, position.col + 1),
        });
        break;
      case "left":
        setPosition({ row: Math.max(0, position.row - 1), col: position.col });
        break;
      case "right":
        setPosition({
          row: Math.min(x.length - 1, position.row + 1),
          col: position.col,
        });
        break;
      default:
        break;
    }
    x[position.row][position.col] = 1;
    setGrid(x);
  };

  return (
    <div className="d-flex flex-column">
      {position.col === 0 ? (
        <button id="Up" onClick={() => handleMove("up")} disabled>
          Up
        </button>
      ) : (
        <button id="Up" onClick={() => handleMove("up")}>
          Up
        </button>
      )}
      <div className="d-flex">
        {position.row === 0 ? (
          <button id="Left" onClick={() => handleMove("left")} disabled>
            Left
          </button>
        ) : (
          <button id="Left" onClick={() => handleMove("left")}>
            Left
          </button>
        )}
        <div id="board">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell ${cell === 1 ? "block" : ""}`}
                />
              ))}
            </div>
          ))}
        </div>
        {position.row >= grid.length - 1 ? (
          <button id="Right" onClick={() => handleMove("right")} disabled>
            Right
          </button>
        ) : (
          <button id="Right" onClick={() => handleMove("right")}>
            Right
          </button>
        )}
      </div>
      {position.col >= grid.length - 1 ? (
        <button id="Down" onClick={() => handleMove("down")} disabled>
          Down
        </button>
      ) : (
        <button id="Down" onClick={() => handleMove("down")}>
          Down
        </button>
      )}
    </div>
  );
}

export default App;
