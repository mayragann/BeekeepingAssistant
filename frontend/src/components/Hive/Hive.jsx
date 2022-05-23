import React, { useState, useEffect } from 'react';
import DisplayHives from '../DisplayHives/DisplayHives';

import useAuth from '../../hooks/useAuth';
import axios from 'axios';





const Hive= (props) => {
    const [user, token] = useAuth();
    const [hives, setHives] = useState([]);


  
    useEffect(()=>{
        fetchHives();
    }, [])
    const fetchHives = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/hives/`,  {
            headers: {
                Authorization: "Bearer " + token,
            },
            });
            setHives(response.data);
            
        } catch (error) {
            console.log(error.response.data);
        }
    };

    
    
    
    return (
        <div className="container">
            <h1>List of Hives</h1>
            <DisplayHives hives={hives} setSeletedHive={props.setSeletedHive}/>
            
        </div>
      );

}
export default Hive;
