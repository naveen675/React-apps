import React, {useEffect,useState} from 'react';



function DisplayTours(){


    const [tours,setTours] = useState([]);
    const [counter,setCount] = useState(0);
    const url = 'https://course-api.com/react-tours-project';

    const getData = () => {
        fetch(url).then(
            (response) => {
                return response.json();
            }

        ).then(
            (data) => {
                setTours(data);
            }
        )
    }

    useEffect(() => {
        
        getData();
        

    }, []);  

    const [showFull,setShowFull] = useState(false);
    const [totalTours, setTotalTours] = useState(false);

    const RemoveTour = (id) => {

        const newTours = (tours) => {
            return (
            tours.filter((tour) => {return (tour['id'] != id)}))
        } 
     
        setTours(newTours);
        
    }



    if(tours.length == 0){
        return (
            <>        <h1>Nill</h1>
            <button className='btn' onClick={() => getData()}>refresh</button>
            </>
            );
    }

    
    return (
        <>
            <div className='tours'>
                <h1>Tours</h1>
                {   
                    tours.map((tour) => {
                        const {name,id,image,price,info} = tour;
                        
                        return (

                        <div key ={id} className='single-tour'>
                            <img src={image}></img>
                            <p>{(showFull) ? info : `${info.substring(0,200)}...`}</p><button className='btn' onClick={() => {setShowFull(true)}}>more</button>
                            <p>{price}</p>
                            <button className='btn' onClick={() => {RemoveTour(id)}}>Not Interested</button>

                        </div>
                        )
                    } )
                }
            </div>
        </>
    )

   
    
   
}

export default DisplayTours;



// {tours.map((tour) => {
//                     const {id,name,info,image} = tour;
//                     return (
//                     <div key={id} className='item'>
//                         <img src={image} alt={name} />
//                         <h4>{name}</h4>
//                         <p>{info}</p>
//                         <button className='btn' onClick={() => {return IClicked(id)}}> Interested</button>
//                         <button onClick={() => { return NiClicked(id)}}> Not Interested</button>
//                     </div>

//                     )
//                 })}