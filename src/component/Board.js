import {React, useState, useEffect} from 'react';
import Square from './Square'
import './style.css'
import { getPuzzle } from '../controllers/index';


const Board = () => {
    //console.log(puzzle)
    const [puzzle, setPuzzle] = useState([]);
    
    useEffect(() => {
        getPuzzle().then((puzzle) => {
            setPuzzle(puzzle);
        })
    }, [setPuzzle])

    console.log(puzzle)
    let rows = []; 
    for( let i = 0 ; i < 9; i++){
        rows[i] = []
        for(let j = 0; j < 9; j++){
            console.log(puzzle.length)
            if(puzzle.length > 0){
                rows[i][j] = <Square 
                                row={i} 
                                col={j} 
                                val={puzzle[i][j] === 0 ? "": puzzle[i][j]} 
                                mutable={puzzle[i][j] === 0 ? true: false}
                            />
            }

        }
    }

    return(
        <table>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, index) => (
                            <td key={index}> {cell} </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}




export default Board