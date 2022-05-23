import React from "react";
import UpdateHive from "../../components/UpdateHive/UpdateHive";


const UpdateHivePage = ({hives}) => {
    

  return (
    <div className="container">
      <UpdateHive hives={hives} />

    </div>
  );
};

export default UpdateHivePage;
