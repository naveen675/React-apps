import React from 'react';
import {data} from './data';
import {useState} from 'react';

function ArrayExample(){

    

    const [d,setD] = useState(data);

    removeId = (id) => {
        const newPeople  = d.filter(() => data.id !== id)
    }
    
    const names = d.map((name) => {

        return (
        <div className='item' key={name['id']}>
           {name['name']}
           <button onClick={() => {removeId(name['id'])}}>Remove</button>
        </div>
        )
    })
    return (
        <div className='.container'>
         {names}
         <button className='btn' onClick={() => { setD([])

         }}>Clear</button>
        </div>
    )

}

export default ArrayExample;