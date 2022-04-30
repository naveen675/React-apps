import React from 'react';
import Data from './data';

function List(props){


    
    
    const data = Data;

   
    return (
        <React.Fragment>
        {
          data.map((person) => {

            const {id,name,age,image} = person;
              return (
                  <React.Fragment>
                  <article key={id} className='person'>
                      <img src={image}/>
                  <div>
                     <h4>{name}</h4>
                     <p>{age} years</p>
                  </div>
                  </article>
                  </React.Fragment>
              )
          })
        }
        
            
        </React.Fragment>
    )
}

export default List;