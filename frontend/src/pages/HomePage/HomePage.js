import { React, useState, useEffect} from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth"
import { Link } from "react-router-dom";
import DisplayHives from "../../components/DisplayHives/DisplayHives"

const HomePage = (props) => {
  const [user, token] = useAuth()
  const [hives, setHives] = useState([]);




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



  return (
    <div className="container">
      
      <DisplayHives  hives ={hives} setSelectedHive={props.setSelectedHive}  setSelectedInspection={props.setSelectedInspection}/>
      <Link to="/addhive">Add Hive!</Link>
      <h3>Check out our FAQ</h3>
    </div>
  );
};

export default HomePage;
