import React,{useState,useContext, createContext} from 'react';
import ppls from './data';

const Propcontext = React.createContext();

function PropDrilling() {

    const [peoples,setPeoples] = useState(ppls);

    const Remove = (id) => {
        const newPeoples = peoples.filter((people) => {
            return (people['id'] !== id )
        });

        setPeoples(newPeoples);
    }

  return (
    <createContext.Provider value={{peoples,Remove}}>
       <List />
    </createContext.Provider>
  )
}

function List(){
    const data = useContext(createContext);

    console.log(data);
    // return (
    //     <div>
    //         {peoples.map((people) => {

    //             return (
    //                 <section>
    //             <div key={people['id']} >

    //                 <h4>{people['name']}</h4>
    //                 <button className='btn' onClick={() => {Remove(people['id'])}}>Remove</button>

    //             </div>
    //             </section>
    //             )

    //         })}
    //     </div>
    // )
}




export default PropDrilling
