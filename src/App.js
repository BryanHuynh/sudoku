import './App.css';
import Board from './component/Board'
import { getPuzzle } from './controllers/index'
import { useState, useEffect } from 'react'
import Cell from './cell'

function App() {
  const handlePrintBoard = () => {
    console.log(puzzle)
  }

  const updateChange = (row,col,val) => {
    let copy = [...puzzle]
    copy[row][col].value = val;
    setPuzzle(copy)
    console.log('updated change: ', copy )
  }

  const [puzzle, setPuzzle] = useState([]);

  useEffect(() => {
      getPuzzle().then((puzzle) => {
          let temp = Array.from(Array(9), () => new Array(9))
          for(let i = 0; i < puzzle.length; i++){
            for(let j = 0; j < puzzle[i].length; j++){
              temp[i][j] = new Cell(i,j,puzzle[i][j], puzzle[i][j] === 0 ? true: false)
            }
          }
          setPuzzle(temp);
      })
  }, [setPuzzle])

  return (
    <div className="App">
      <div className="App-header">
        <Board puzzle={puzzle} updateChange={updateChange}/>
        <button onClick={handlePrintBoard}>Print Board</button>
      </div>
    </div>
  );
}

export default App;
