import React from "react";

import { Link } from "react-router-dom";
import Hive from "../../components/Hive/Hive";

const HomePage = () => {


  return (
    <div className="container">
      
      <Hive />
      <Link to="/addhive">Add Hive!</Link>
    </div>
  );
};

export default HomePage;
