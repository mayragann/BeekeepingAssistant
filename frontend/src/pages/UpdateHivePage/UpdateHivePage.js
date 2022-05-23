import React from "react";
import UpdateHive from "../../components/UpdateHive/UpdateHive";


const UpdateHivePage = ({selectedHive}) => {
    

  return (
    <div className="container">
      <UpdateHive selectedHive={selectedHive} />

    </div>
  );
};

export default UpdateHivePage;
