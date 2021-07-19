export const checkBox = (puzzle, x, y) =>{
    let grid = extractBox(puzzle, x, y);
    check(grid)
}
export const checkRow = (puzzle, y) => {
    let row = extractRow(puzzle, y)
    check(row);
}

export const checkCol = (puzzle, x) => {
    let col = extractCol(puzzle, x)
    check(col);
}
export const possible = (y,x,n) => {
    
}

const check = (grid) => {
    let missing = []
    let contains = []
    for(let i = 1; i <= 9; i++){
        if(grid.includes(i)){
            contains.push(i)
        }else{
            missing.push(i)
        }
    }
    console.log(`${grid}\nincludes: ${contains} \nmissing: ${missing}`)    
}
const extractRow = (puzzle, row) => {
    let ret = []
    for(let i  = 0; i < 9; i++){
        ret.push(puzzle[row][i].value)
    }
    return ret;
}

const extractCol = (puzzle, col) => {
    let ret = []
    for(let i  = 0; i < 9; i++){
        ret.push(puzzle[i][col].value)
    }
    return ret;
}

const extractBox = (puzzle, x, y) => {
    let grid = []
    for(let i = x * 3; i < (x*3) + 3; i++){
        for(let j = y * 3; j < (y*3) + 3; j++){
            grid.push(puzzle[i][j].value);
        }
    }
    return grid
}

