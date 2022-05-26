import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import DisplayInspections from "../../components/DisplayInspections/DisplayInspections";
import InspectionTracker from "../../components/InspectionTracker/InspectionTracker";
import SearchInspections from "../../components/InspectionSearch/InspectionSearch"

const InspectionPage = (props) => {
  const [user, token] = useAuth();
  const [inspections, setInspections] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchInspections();
  }, [token]);

  const fetchInspections = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/inspections/all/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setInspections(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  function applyFilter(category, userInput){
    if(category === 'All' || userInput ===''){
    console.log('working!')
    fetchInspections();
    }
    else
    {
      let newInspections = inspections.filter(function(element){
        if(element[category] === userInput){
          return true;
        }
      })
      setInspections(newInspections);
    }
  }

  return (
    <div className="container">
      <InspectionTracker inspections={inspections} />
      <SearchInspections inspections={inspections} applyFilter={applyFilter}/>
      <DisplayInspections
        inspections={inspections}
        setSelectedHive={props.setSelectedHive}
        setSelectedInspection={props.setSelectedInspection}
      />
    </div>
  );
};

export default InspectionPage;
