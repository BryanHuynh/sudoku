export const getGrid = (puzzle) => {
    let grid = [];
    for(let y = 0; y < 9; y++){
        let row = [];
        for(let x = 0; x < 9; x++){
            row.push(puzzle[y][x].value);
        }
        grid.push(row);
    }
    return [...grid];
}

export const solve = (puzzle) => {

    const backtrack = (grid) => {
        let emptySpot = getNextEmptySpot(grid);
        let row = emptySpot[0];
        let col = emptySpot[1];
        
        if(row === -1){
            return grid;
        }

        for(let n = 1; n < 10; n++){
            if(possible(grid, row, col, n)){
                grid[row][col] = n;
                backtrack(grid);
            }
        }

        if(getNextEmptySpot(grid)[0] !== -1){
            grid[row][col] = 0;
        }

        return grid
    }

    return(backtrack(getGrid(puzzle)));
}

const getNextEmptySpot = (grid) => {
    for(let y = 0; y < 9; y++){
        for(let x = 0; x < 9; x++){
            if(grid[y][x] === 0){
                return [y,x];
            }
        }
    }
    return [-1,-1];

}

export const possible = (grid, y, x, n) => {
    let row = getRow(grid, y);
    let col = getCol(grid, x);
    let box = getBox(grid, y, x);
    if(row.includes(n) || col.includes(n) || box.includes(n)){
        return false
    }
    return true;
    
}

const getRow = (grid, y) => {
    return grid[y];
}

const getCol = (grid, x) => {
    let col = [];
    for(let y = 0; y < 9; y++){
        col.push(grid[y][x])
    }
    return col;
}

const getBox = (grid, y, x) => {
    let ret = [];
    let _y = Math.floor(y / 3)
    let _x = Math.floor(x / 3)
    for(let i = _y * 3 ; i < (_y*3) + 3; i ++){
        for(let j = _x * 3; j < (_x * 3) + 3; j ++){
            ret.push(grid[i][j])
        }  
    }    
    return ret;
}

