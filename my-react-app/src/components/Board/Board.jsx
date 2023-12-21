import { useState } from "react"
import Square from "../Square/Square"
import './Board.css'

const squareids = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12 ,13, 14, 15,
    16, 17, 18, 19, 20,
    21, 22, 23, 24, 25
]

export default function Board({ playerTurn, setPlayerTurn }) {

    return(
        <div className="board-container">
            {squareids.map(id => 
                <Square id={id} />
            )}
        </div>
    )
}