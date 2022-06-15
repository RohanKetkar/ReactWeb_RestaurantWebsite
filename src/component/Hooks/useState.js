import React from 'react'
import "./style.css"
const useState = () => {
    const [myNum, setMyNum] = React.useState(0);
    return (
        <>
            <div className='center-div'>
                <p>{myNum}</p>
                <div className='button2'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className='button2' >
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}
export default useState;