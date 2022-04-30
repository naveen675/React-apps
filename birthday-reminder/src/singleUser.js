import React, { useEffect } from 'react';
import {useState} from 'react';

function  DisplayUser() {


    const [user,setUser] = useState("Default");
    const [isLoading,setIsLoading] = useState(true);
    const [isError, SetIsError] = useState(false);
    const url = 'https://api.github.com/users/naveen675';


    const getUser = () => {
        fetch(url).then( (response) => {
            return response.json()}
        ).then((data) => {
            setUser(data['login'])
            setIsLoading(false);
            //throw new Error();
        }).catch((error) => {
            SetIsError(true);
        })
    }
    useEffect(() => {
        getUser();
    })




    if(isLoading){

        return(
            <div>
            <h1>Loading ...</h1>
            </div>
        )
    }
    if(isError){
        return (
            <h1>Error...</h1>
        )
    }

    return (
    <h1>{user}</h1>
    )
}

export default DisplayUser;


