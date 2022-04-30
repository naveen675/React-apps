import React, { useEffect, useState, useSyncExternalStore } from 'react';

function GetUsers(){


    let url = 'https://api.github.com/users';

    const [users, setUsers] = useState([]);


    let getUsers = () => {

        fetch(url).then((response) => {
            return response.json()
        }).then(
            (data) => {
                console.log(data);
                setUsers(data);
            }
        )
    }

    useState(
        () => {
            getUsers()
        }, []
    )



    

    return <>
        <h1>Github Users</h1>
        <ul className='users'>
        {
            users.map((user) => {
                const {avatar_url,login} = user;
                <>
                    <li><img src={avatar_url} /></li>
                    <li>{login}</li>
                </>
            })
                
           
        }
         </ul>
    </>
}

export default getUsers;