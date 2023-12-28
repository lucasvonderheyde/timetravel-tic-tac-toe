import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import './GamePage.css'

export default function GamePage() {
 
  const [playerTurn, setPlayerTurn] = useState(1)
  // const [lastClickedBoard, setLastClickedBoard] = useState(
  //   <Board 
  //   playerTurn={playerTurn}
  //   setPlayerTurn={setPlayerTurn}
  //   // clickAndAddNextBoard={clickAndAddNextBoard}
  // />
  // ) 

  let boardCount = 0

  
  // const clickAndAddNextBoard = (event) =>{
  //   setLastClickedBoard()
  // }

  const [gamePageDiv, setGamePageDiv] = useState([boardCount])

 

  return (
    <div className="game-page">
      {playerTurn ? <h1>Turn: Player 1</h1> : <h1>Turn: Player 2</h1>}
      {gamePageDiv.map(id =>
        <Board 
        boardId={id}
        boardCount={boardCount}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
        gamePageDiv={gamePageDiv}
        setGamePageDiv={setGamePageDiv}
        // clickAndAddNextBoard={clickAndAddNextBoard}
      />
      )}
    </div>
  )
}


