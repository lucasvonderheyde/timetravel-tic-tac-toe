import { useState } from 'react'
import './Square.css'

export default function Square(id) {

    const [squareState, setSquareState] = useState("-")

    const clickGameSquare = (event) =>{
        setSquareState("X")
    }

    return(
        <button className='square' onClick={clickGameSquare} >{squareState}</button>
    )
}