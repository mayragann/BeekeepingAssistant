import { React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth"
import { Link } from "react-router-dom";
import DisplayHives from "../../components/DisplayHives/DisplayHives"

const HomePage = (props) => {
  const [user, token] = useAuth()
  const [hives, setHives] = useState([]);
  const [inspections, setInspections] = useState([]);
  const { id } = useParams();
  let hive = hives.find(hive => hive.id === parseInt(id))


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
    // useEffect(()=>{
    //     fetchInspections();
    // }, [])
    
    // const fetchInspections = async () => {
    //     try {
    //         let response = await axios.get(`http://127.0.0.1:8000/api/inspections/all/${id}`,  {
    //         headers: {
    //             Authorization: "Bearer " + token,
    //         },
    //         });
    //         setInspections(response.data);
            
    //     } catch (error) {
    //         console.log(error.response.data);
    //     }
    // };


  return (
    <div className="container">
      
      <DisplayHives  hives ={hives} setSelectedHive={props.setSelectedHive}/>
      <Link to="/addhive">Add Hive!</Link>
    </div>
  );
};

export default HomePage;
