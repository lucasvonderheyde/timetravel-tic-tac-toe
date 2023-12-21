import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import './GamePage.css'

export default function GamePage() {
 
  const [playerTurn, setPlayerTurn] = useState(1)
  const [boardState, setBoardState] = useState()

  return (
    <div className="game-page">
      {playerTurn ? <h1>Turn: Player 1</h1> : <h1>Turn: Player 2</h1>}
      <Board 
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
      />
    </div>
  )
}


