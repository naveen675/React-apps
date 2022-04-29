import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import {store} from './store';





function BookStore(){

    

    const bookDetails = store.map((book,index) => {
        
        return (<Book key={index} {...book} />)
    })
    return (
        <div className='content'>
            {bookDetails}
        </div>
    )
}

function Book(props) {
    const {img,title,author} = props;

  return (
    <div className='items'>
        <Person img={img}/>
        <Title title={title}/>
        <Author author={author}/>
    </div>
  )
}


const Person = (props) => {
    return (
        <img src={props.img} />
    )
}

const Title = (props) => {
    return (
        <h3>{props.title}</h3>
    )
}

const Author = (props) => {
    return (
    <p>{props.author}</p>
    )
}


ReactDom.render(<BookStore />, document.getElementById('root'));

export default BookStore
