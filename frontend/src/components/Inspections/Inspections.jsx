import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Hive from '../Hive/Hive';

const Inspections = (props) => {
    const[user, token] =useAuth();
    const [inspections, setInspections] = useState([]);
    const [hives, setHives] = useState([])

    useEffect(()=>{
        fetchInspections(props.inspections);
    }, [])

    const fetchInspections = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/inspections/all/${props.hives}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
                });
                setInspections(response.data);
                console.log(response.data)
        } catch (error) {
            
        }
    }

    return ( 
        <></>
     );
}
 
export default Inspections;props
