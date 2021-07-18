import * as api from '../api/index';

export const getPuzzle = async () => {
    try {
        const data = await api.fetchPuzzle();
        return data
    }catch (error) {
        console.log(error.messages);      
    }
}
