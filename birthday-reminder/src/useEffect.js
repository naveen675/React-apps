import React, { useState } from 'react';
import {useEffect} from 'react';


function UseEffect(){


    console.log("Render");

    const [value,setValue] = useState(0);



    useEffect(() => {
            console.log('use Effect');
            document.title = `new message (${value})`;
        },[value]);

    return (

        <React.Fragment>
        <h1>Counter</h1>
        <h1>{value}</h1>
        <button onClick={() => setValue(value+1)}>Click</button>
        </React.Fragment>
        
    );


}

export default UseEffect;