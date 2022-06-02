import React from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import Hive from './../../images/Hive.svg'
import Card from 'react-bootstrap/Card'

let initialValues = {
    hive_number: "",
    inspection_date: "",
}

const AddHivePage = () =>{
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewHive)

    async function postNewHive(){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/hives/", formData, 
            {
                headers: {
                    Authorization: "Bearer " + token,
                  },
            })
            navigate("/")
        } catch (error) {
        }
    }

    return(
        <div className="form-backgrounds" >
            <form className="form" onSubmit={handleSubmit}>
            <Card style={{ width: '20rem', margin:'15px' }}>
            <Card.Img variant="top" src={Hive} />
            </Card>
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
                <button type="submit">Add Hive!</button>
            </form>
        </div>
    )

}
export default AddHivePage;