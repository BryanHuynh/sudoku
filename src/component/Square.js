import {React, useState}from 'react'

const Square = ({row, col, val, mutable=true}) => {
    const [value, setValue] = useState(val)

    const handleChange = (e) => {
        if(mutable){
            console.log(row, col, e.target.value)
            setValue(e.target.value)
        }
    }

    return(
        <input type='text' maxLength={1} value={value} onChange={handleChange} />
    )
}

export default Square;