import { React, useState, useEffect} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom";
import DisplayHives from "../../components/DisplayHives/DisplayHives"
import DisplayAlert from "../../components/DisplayAlert/DisplayAlert";

const HomePage = (props) => {
  const [user, token] = useAuth()
  const [hives, setHives] = useState([]);
  const navigate = useNavigate()



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
      <DisplayAlert hives={hives}/>
      <DisplayHives  hives ={hives} setSelectedHive={props.setSelectedHive}  setSelectedInspection={props.setSelectedInspection}/>
      <div className="button-links">
      <h5>Add A New Hive!</h5>
      <button onClick={() => navigate("/addhive")}>Add Hive!</button>
      </div>

      <div className="button-links">
      <h5>Search Helpful Videos!</h5>
      <button onClick={() => navigate("/videos")}>Search!</button>
      </div>
    </div>
  );
};

export default HomePage;
