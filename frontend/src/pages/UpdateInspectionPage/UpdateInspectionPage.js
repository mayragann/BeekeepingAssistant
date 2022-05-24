import React from 'react';

import { useNavigate } from "react-router-dom"
import axios from 'axios'
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"


const  UpdateInspection= ({selectedInspection, selectedHive}) => {
    let updatedValues = {
        hive_id: selectedHive,
        eggs: "",
        larvae: "",
        sealed_brood: "",
        covered_bees: "",
        nectar_honey: "",
        pollen: "",
        pest_spotted: "",
        pest_action: "",
        notes_concerns: "",
    
    }
    
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(updatedValues, putUpdatedInpsection)
    
    async function putUpdatedInpsection(){
        try {
            let response = await axios.put(`http://127.0.0.1:8000/api/inspections/${selectedInspection}/`, formData, 
            {
                headers: {
                    Authorization: "Bearer " + token,
                  },
            });
            navigate("/")
            UpdateInspection(response.data); 
        } catch (error) {
          
        }
    }
    return ( 
        <div className="container" >
        <form className="form" onSubmit={handleSubmit}>
            <label name="hive_id"
                    value={formData.hive_id}>Update Form for Hive: {selectedHive} </label>
            <label>
                Eggs:{""}
                <input
                    type="number"
                    name="eggs"
                    value={formData.eggs}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Larvae:{""}
                <input
                    type="number"
                    name="larvae"
                    value={formData.larvae}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Sealed Brood:{""}
                <input
                    type="number"
                    name="sealed_brood"
                    value={formData.sealed_brood}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Full of Bees:{""}
                <input
                    type="number"
                    name="covered_bees"
                    value={formData.covered_bees}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                With Nectar and/or Honey:{""}
                <input
                    type="number"
                    name="nectar_honey"
                    value={formData.nectar_honey}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Pollen:{""}
                <input
                    type="number"
                    name="pollen"
                    value={formData.pollen}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
               Pest Spotted? Yes or No - (N/A if None):{""}
                <input
                    type="text"
                    name="pest_spotted"
                    value={formData.pest_spotted}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Pest Treatment (N/A if none):{""}
                <input
                    type="text"
                    name="pest_action"
                    value={formData.pest_action}
                    onChange={handleInputChange}
                    />
            </label>
            <label>
                Hive Notes or Concerns:{""}
                <input
                    type="text"
                    name="notes_concerns"
                    value={formData.notes_concerns}
                    onChange={handleInputChange}
                    />
            </label>
            <button type="submit">Update Hive!</button>
         
        </form>
        
    </div>

     );
}
 
export default UpdateInspection ;
