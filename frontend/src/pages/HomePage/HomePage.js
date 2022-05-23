import React from "react";

import { Link } from "react-router-dom";
import Hive from "../../components/Hive/Hive";

const HomePage = (props) => {


  return (
    <div className="container">
      
      <Hive setSeletedHive={props.setSeletedHive} />
      <Link to="/addhive">Add Hive!</Link>
    </div>
  );
};

export default HomePage;
