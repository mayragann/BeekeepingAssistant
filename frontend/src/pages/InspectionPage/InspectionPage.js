import { React, useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import useAuth from "../../hooks/useAuth"
import DisplayInspections from "../../components/DisplayInspections/DisplayInspections";


const InspectionPage = (props) => {
  const [user, token] = useAuth()
  const [inspections, setInspections] = useState([]);
  const { id } = useParams();
  
  useEffect(()=>{
    fetchInspections();
}, [token])

const fetchInspections = async () => {
    try {
        let response = await axios.get(`http://127.0.0.1:8000/api/inspections/all/${id}`,  {
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
      <DisplayInspections inspections={inspections} setSelectedHive={props.setSelectedHive}  setSelectedInspection={props.setSelectedInspection}  />

    </div>
  );
};

export default InspectionPage;
