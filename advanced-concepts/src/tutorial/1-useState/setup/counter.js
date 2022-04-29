import React, { useState } from 'react';


function Counter(){

    const [value,setValue] = useState(0);

    function Increment(){
        

        setTimeout(() => {setValue(value+1)}, 2000)
    }
    function Decrement(){
        setValue(value-1);
    }
    function Reset(){
        setValue(0);
    }

    return(
        
        <React.Fragment>
            <section>
                <h1>Counter</h1>
                <h3>{value}</h3>
                <button className='btn' onClick={() => {Increment()}}>Increase</button>
                <button className='btn' onClick={() => {Decrement()}}>Decrease</button>
                <button className='btn' onClick={() => {Reset()}}>Reset</button>
            </section>

            <section>
                <h1>Complex Counter</h1>
                <h3>{value}</h3>
                <button className='btn' onClick={() => {Increment()}}>Increase</button>
                <button className='btn' onClick={() => {Decrement()}}>Decrease</button>
                <button className='btn' onClick={() => {Reset()}}>Reset</button>
            </section>
        </React.Fragment>
    )
}

export default Counter;