import { useState } from 'react'
import './Square.css'

export default function Square({ id, boardId, playerTurn, setPlayerTurn, gamePageDiv, setGamePageDiv, clickAndAddNextBoard }) {

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

    const buttonClickHandler = (event) =>{
        boardId++
        clickGameSquare()
        setGamePageDiv([...gamePageDiv, boardId])
        // clickAndAddNextBoard()
        
    }

    return(
        <button className='square' onClick={buttonClickHandler} >{squareState}</button>
    )
}