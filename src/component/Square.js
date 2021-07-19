import {React}from 'react'

const Square = ({row, col, val, mutable=true, updateChange}) => {
    let value = val

    const handleChange = (e) => {
        if(mutable){
            const parsed = parseInt(e.target.value, 10)
            console.log(row, col, e.target.value)
            if((!isNaN(parsed) && parsed > 0) || e.target.value === ""){
                value = (e.target.value)
                updateChange(row, col, e.target.value === "" ? 0 : parsed)
            }            
        }
    }


    return(
        <input 
            type='text' 
            maxLength={1} 
            value={value} 
            onChange={handleChange} 
            style={ mutable ? {color:'red'} : {color:'black'}}
            disabled={ mutable ? false : true}
        />
    )
}

export default Square;