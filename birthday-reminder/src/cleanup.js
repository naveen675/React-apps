import React, { useEffect, useState } from 'react';


function Window(){


    const [size,setSize] = useState(window.innerWidth);


    const checkSize = () => {
        setSize(window.innerWidth);    
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize);

       return () => {
            window.removeEventListener('resize', checkSize);
       };
        })

    return (
        <>
            <h1>Window Size</h1>
            <h1>{size}</h1>
        </>
    )



}

export default Window;