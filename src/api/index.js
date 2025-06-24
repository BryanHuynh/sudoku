import axios from 'axios';
const url = "https://sudoku-api.vercel.app/api/dosuku"


export const fetchPuzzle = () => axios.get(url)
    .then(({data}) => {
        console.log(data.newboard.grids[0].value);
        return data.newboard.grids[0].value
    });

