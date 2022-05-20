import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";
import HiveCard from "../../components/HiveCard/HiveCard";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [hive, setHive] = useState([]);

  return (
    <div className="container">
      <HiveCard />
      <Link to="/addhive">Add Hive!</Link>
    </div>
  );
};

export default HomePage;
