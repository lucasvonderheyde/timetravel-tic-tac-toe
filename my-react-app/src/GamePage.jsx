import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import './GamePage.css'

export default function GamePage() {
 
  const [playerTurn, setPlayerTurn] = useState()
  const [boardState, setBoardState] = useState()

  return (
    <div className="game-page">
      <Board />
    </div>
  )
}


