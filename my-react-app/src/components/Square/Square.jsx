import { useState } from 'react'
import './Square.css'

export default function Square({ id, playerTurn, setPlayerTurn }) {

    const [squareState, setSquareState] = useState("-")

    const clickGameSquare = (event) =>{
        if (playerTurn === 1) {
            setPlayerTurn(0)
            setSquareState('X')
        }
        else {
            setPlayerTurn(1)
            setSquareState('O')
        }
    }

    return(
        <button className='square' onClick={clickGameSquare} >{squareState}</button>
    )
}