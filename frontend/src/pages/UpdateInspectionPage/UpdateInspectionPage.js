import React from 'react';
import Card from 'react-bootstrap/Card'
import Inspection from './../../images/Inspection.svg'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"


const  UpdateInspection= ({selectedInspection}) => {
    const { id } = useParams();
    let updatedValues = {
        hive_id: id,
        eggs: "",
        larvae: "",
        sealed_brood: "",
        covered_bees: "",
        nectar_honey: "",
        pollen: "",
        pest_spotted: "",
        pest_action: "",
        notes_concerns: "",
        inspection_date: "",
    
    }
    
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(updatedValues, putUpdatedInpsection)
    
    async function putUpdatedInpsection(){
        
        try {console.log(formData)
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
        <div className="form-backgrounds" >
        <form className="form" onSubmit={handleSubmit}>
        <Card style={{ width: '15rem', margin:'20px' }} >
                                 <Card.Img variant="top" src={Inspection} /> </Card>
            <label name="hive_id"
                    value={formData.hive_id}><h5>Update Inspection: </h5></label>
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
            <label>
               Date:{""}
                <input
                    type="date"
                    name="inspection_date"
                    value={formData.inspection_date}
                    onChange={handleInputChange}
                    />
            </label>
            <button type="submit">Update Inspection!</button>
         
        </form>
        
    </div>

     );
}
 
export default UpdateInspection ;
