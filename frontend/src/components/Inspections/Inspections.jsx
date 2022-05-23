import React, { useState, useEffect } from 'react';
import DisplayInspections from '../DisplayInspections/DisplayInspections';

import useAuth from '../../hooks/useAuth';
import axios from 'axios';


const Inspections= (selectedHive, props) => {
    const [user, token] = useAuth();
    const [inspections, setInspections] = useState([]);

    useEffect(()=>{
        fetchInspections();
    }, [])
    const fetchInspections = async () => {
        try {console.log(selectedHive)
            let response = await axios.get(`http://127.0.0.1:8000/api/inspections/all/${selectedHive}`,  {
            headers: {
                Authorization: "Bearer " + token,
            },
            });
            setInspections(response.data);
            
        } catch (error) {
            console.log(error.response.data);
        }
    };


    
    return (
        <div className="container">
            <h1>List of Inspections</h1>
            <DisplayInspections inspections={inspections} setSeletedHive={props.setSeletedHive} />
            
        </div>
      );

}
export default Inspections;
