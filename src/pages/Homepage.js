import React from 'react'
import userFetch from '../hooks/useFetch'

export default function Homepage() {

    const { loading, error, data} = userFetch('https://reqres.in/api/users')

    if (loading) return <p>loading...</p>
     if (error) return <p>Error</p>

    return (
        <div className="main-wrapper">
            Profile list from a REST API
            <div className="user-container">
                {data && data.data.map( user => (
                    
                    <div key={user.id} className="user"> 
                    <img key={user.avatar} src={user.avatar}/>
                    <div>{user.first_name + " " + user.last_name}  </div>
                    <div>{user.email} </div>
                    </div>
                ))}
            </div>
            {console.log(data)}

        </div>
    )
}
