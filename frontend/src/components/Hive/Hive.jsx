import React, { useState, useEffect } from 'react';

import useAuth from '../../hooks/useAuth';
import axios from 'axios';



const Hive= (props) => {
    const [user, token] = useAuth();
    const [inspections, setInspections] = useState([]);
    const [hive, setHive] = useState([]);
  
    useEffect(()=>{
        fetchHive();
    }, [])
    const fetchHive = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/hives/`, {
            headers: {
                Authorization: "Bearer " + token,
            },
            });
            setHive(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data);
        }
    };
    console.log(fetchHive)
    
    
    
    return (
        <div className="container">
            <h1>List of Hives</h1>

        </div>
      );

}
export default Hive;

// {cars &&
//     cars.map((car) => (
//       <p key={car.id}>
//         {car.year} {car.model} {car.make}
//       </p>
//     ))}