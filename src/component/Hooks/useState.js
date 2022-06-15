import React from 'react'
import "./style.css"
const useState = () => {
    // const initialData = 0;
    // const [myNum, setMyNum] = React.useState(initialData);
    const [myNum, setMyNum] = React.useState(0);
    return (
        <>
            <div className='center-div'>
                <p>{myNum}</p>
                <div className='button2' onClick={() =>  setMyNum(myNum +1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className='button2' onClick={() =>myNum >0 ? setMyNum(myNum-1):setMyNum({myNum})}>

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
          
