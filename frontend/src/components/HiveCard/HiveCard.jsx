import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from "axios";

const HiveCard = (props) => {
    const [user, token] = useAuth();
    const [inspections, setInspections] = useState([]);
    const [hive, setHive] = useState([]);
  
    useEffect(() => {
      const fetchHive = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/hives/${props.currentHive.id}/`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setHives(response.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      console.log(HiveCard)
      fetchHive();
    }, [props.currentHive]);
    return (
        <div className="container">
            
        </div>
      );

}
export default HiveCard;