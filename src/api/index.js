import axios from 'axios';
const url = "https://sugoku.herokuapp.com/board?difficulty=easy"

export const fetchPuzzle = () => axios.get(url)
    .then(({data}) => {
        return data['board']
    });

