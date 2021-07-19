import './App.css';
import Board from './component/Board'
import { getPuzzle } from './controllers/index'
import { useState, useEffect } from 'react'
import Cell from './cell'
import * as Solver from './solver'

function App() {

  const handlePrintBoard = () => {
    console.log('grids')
    for(let i = 0 ; i < 3 ; i++){
      for(let j = 0; j < 3; j++){
        Solver.checkBox(puzzle, i, j)
      }
    }
    console.log('rows')
    for(let i = 0 ; i < 9; i++){
      Solver.checkRow(puzzle, i)
    }
    console.log('col')
    for(let i = 0 ; i < 9; i++){
      Solver.checkCol(puzzle, i)
    }

  }

  const updateChange = (row,col,val) => {
    let copy = [...puzzle]
    copy[row][col].value = val;
    setPuzzle(copy)
    console.log('updated change: ', copy )
  }

  const handleClear = () => {
    let copy = [... puzzle]
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
    console.log('new game')
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
      console.log('use-effect()')
  }, [setPuzzle])

  return (
    <div className="App">
      <div className="App-header">
        
        <Board puzzle={puzzle} updateChange={updateChange}/>
        <div className="flex-container">
          <button type="button" className="btn btn-light" onClick={handlePrintBoard}>Print Board</button>
          <button type="button" className="btn btn-light" onClick={handleClear}>Clear</button>
          <button type="button" className="btn btn-light" onClick={handleNewGame}>New Game</button>
        </div>

      </div>
    </div>
    
  );
}

export default App;
