import React from "react";
import Inspections from "../../components/Inspections/Inspections";


const InspectionPage = ({selectedHive}) => {
    

  return (
    <div className="container">
      <Inspections selectedHive={selectedHive}  />

    </div>
  );
};

export default InspectionPage;
