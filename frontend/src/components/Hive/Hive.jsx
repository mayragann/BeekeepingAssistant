import React, { useState, useEffect } from 'react';
import DisplayHives from '../DisplayHives/DisplayHives';

import useAuth from '../../hooks/useAuth';
import axios from 'axios';



const Hive= (props) => {
    const [user, token] = useAuth();

    const [hives, setHives] = useState([]);
  
    useEffect(()=>{
        fetchHives(props.hives);
    }, [])
    const fetchHives = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/hives/`, {
            headers: {
                Authorization: "Bearer " + token,
            },
            });
            setHives(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data);
        }
    };
    console.log(fetchHives)
    
    
    
    return (
        <div className="container">
            <h1>List of Hives</h1>
            <p><DisplayHives hives={hives}/></p>
            
        </div>
      );

}
export default Hive;
