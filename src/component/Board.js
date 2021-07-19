import {React} from 'react';
import Square from './Square'
import './style.css'



const Board = ({puzzle, updateChange}) => {
    let rows = []; 
    for( let i = 0 ; i < 9; i++){
        rows[i] = []
        for(let j = 0; j < 9; j++){
            if(puzzle.length > 0){
                rows[i][j] = <Square 
                                row={i} 
                                col={j} 
                                val={puzzle[i][j].value === 0 ? "": puzzle[i][j].value} 
                                mutable={puzzle[i][j].mutable}
                                updateChange={updateChange}
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