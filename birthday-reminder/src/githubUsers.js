import React, { useEffect, useState, useSyncExternalStore } from 'react';

function GetUsers(){


    let url = 'https://api.github.com/users';

    const [users, setUsers] = useState([]);


    const getUsers = () => {

        fetch(url).then((response) => {
            return response.json()
        }).then(
            (data) => {
                // console.log(data);
                setUsers(data);
            }
        )
    }

    useState(
        () => {
            getUsers();
        }, []
    )



    

    return <>
        <h1>Github Users</h1>
        <ul className='users'>
        {
            users.map((user) => {
                const {avatar_url,login} = user;
                // console.log(avatar_url,login
                return(

                    <li key={login}>
                        <img src={avatar_url} />
                        <h4>{login}</h4>
                    </li>
                )
            })
                
           
        }
         </ul>
    </>
}

export default GetUsers;