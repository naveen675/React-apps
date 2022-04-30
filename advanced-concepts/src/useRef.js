import React, {useRef} from 'react';
import {useEffect} from 'react';
function UseRef() {

    const refContainer = useRef(null);

    const handleSubmit = (e)=> {

        e.preventDefault();
       
    }

    useEffect(() => {
        console.log(refContainer.current.value);
    })
  return (
   
    <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
            <label> Name:</label>
            <input type='text' ref={refContainer} />
            
        </div>
        <button >submit</button>
    </form>
  )
}

export default UseRef
