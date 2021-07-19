export const checkBox = (puzzle, x, y) =>{
    let grid = extractBox(puzzle, x, y);
    return check(grid)
}
export const checkRow = (puzzle, y) => {
    let row = extractRow(puzzle, y)
    return check(row);
}

export const checkCol = (puzzle, x) => {
    let col = extractCol(puzzle, x)
    return check(col);
}
export const possible = (puzzle, y, x, n) => {
    let boxElements = checkBox(puzzle, y, x);
    let rowElements = checkRow(puzzle, y);
    let colElements = checkCol(puzzle, x);
    console.log(boxElements, rowElements, colElements)
    if(boxElements.includes(n)  || rowElements.includes(n) || colElements.includes(n)){
        return false
    }
    return true;


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
    //console.log(`${grid}\nincludes: ${contains} \nmissing: ${missing}`)
    return contains;

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
    let row = Math.floor(x/3);
    let col = Math.floor(y/3);
    for(let i = row * 3; i < (row*3) + 3; i++){
        for(let j = col * 3; j < (col*3) + 3; j++){
            grid.push(puzzle[i][j].value);
        }
    }

    
    return grid
}

