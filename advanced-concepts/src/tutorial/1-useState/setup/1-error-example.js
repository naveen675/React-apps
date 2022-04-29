import React from 'react';
import {useState} from 'react';
import Handler from './handler';



const ErrorExample = () => {

    const [title,setTitle] = useState("Clicke Button");


    // function ClickHandler(props){
      
    //     setTitle(props);
    // }
    return (
    <React.Fragment>
    <h2>{title}</h2>
    <button onClick={() => {Handler("value passed")}}>click</button>
    </React.Fragment>
    );
    };

export default ErrorExample;