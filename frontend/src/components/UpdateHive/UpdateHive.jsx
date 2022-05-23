import React, { useEffect } from 'react';

import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"

let updatedValues = {
    hive_number: "",
    inspection_date: "",
}

const  UpdateHive= ({selectedHive}) => {
    const location = useLocation()
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(updatedValues, putUpdatedHive)
    

    async function putUpdatedHive(){
        try {
            console.log(selectedHive)
            let response = await axios.put(`http://127.0.0.1:8000/api/hives/update/${selectedHive}/`, formData, 
            {
                headers: {
                    Authorization: "Bearer " + token,
                  },
            });
            UpdateHive(response.data);
            location(response.data);
            
            navigate("/")
        } catch (error) {
            console.log("Not working");
        }
    }
    return ( 
        <div className="container" >
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Hive Number:{""}
                <input
                    type="text"
                    name="hive_number"
                    value={formData.hive_number}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Next Inspection Date:{""}
                <input
                    type="date"
                    name="inspection_date"
                    value={formData.inspection_date}
                    onChange={handleInputChange}
                    />
            </label>
            <button>Update Hive!</button>
        </form>
    </div>

     );
}
 
export default UpdateHive ;
