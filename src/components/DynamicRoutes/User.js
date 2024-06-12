import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import DynamicRoute from './DynamicRoutes'

function User() {
    const { id } = useParams(); // Get the dynamic parameter from the URL
    const [userData, setUserData] = useState({})
    
    useEffect(()=>{
        fetch('/Users.json').then(data =>{ //keep this json file in public always
            return data.json()
        }).then(data =>{
            setUserData(data[id])
        })
    }, [id])

    

    return (
        <div>
        <DynamicRoute />
        <div className="User">
            <h3>User Profile: {id}</h3>
            <p>Name :{userData?.name}</p>
            <p>Age :{userData?.age}</p>
            <img src={`data:image/png;base64,${userData?.image}`} alt={userData?.name} />
        </div>
    </div>
    
    )
  };
  
  export default User;