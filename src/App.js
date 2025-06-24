import './App.css';
import Board from './component/Board'
import { getPuzzle } from './controllers/index'
import { useState, useEffect } from 'react'
import Cell from './cell'
import * as Solver from './solver'

function App() {
  const [puzzle, setPuzzle] = useState([]);
  
  const updateChange = (row,col,val) => {
    let copy = [...puzzle]
    copy[row][col].value = val;
    setPuzzle(copy)
  }

  const handleClear = () => {
    let copy = [...puzzle]
    for(let i = 0; i < puzzle.length; i++){
      for(let j = 0; j < puzzle[i].length; j++){
        if(copy[i][j].mutable){
          copy[i][j].value = 0
        }
      }
    }
    setPuzzle(copy)
    console.log('clearing')
  }

  const handleNewGame = () => {
    getPuzzle().then((puzzle) => {
      let temp = Array.from(Array(9), () => new Array(9))
      for(let i = 0; i < puzzle.length; i++){
        for(let j = 0; j < puzzle[i].length; j++){
          temp[i][j] = new Cell(i,j,puzzle[i][j], puzzle[i][j] === 0 ? true: false)
        }
      }
      setPuzzle(temp);
    })
  }




  const handleSolve = () => {
    let solution = Solver.solve(puzzle);
    console.log(solution)

    for(let y = 0; y < 9; y++){
      for(let x = 0; x < 9; x++){
        updateChange(y, x, solution[y][x])
      }
    }
  }


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
      console.log('use-effect()')
  }, [setPuzzle])

  return (
    <div className="App">
      <div className="App-header">
        
        <Board puzzle={puzzle} updateChange={updateChange}/>
        <div className="flex-container">
          <button type="button" className="btn btn-light" onClick={handleClear}>Clear</button>
          <button type="button" className="btn btn-light" onClick={handleNewGame}>New Game</button>
          <button type="button" className="btn btn-light" onClick={handleSolve}>Solve</button>
        </div>

      </div>
    </div>
    
  );
}

export default App;
