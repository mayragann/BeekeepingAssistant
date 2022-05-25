import React from "react";

import { useNavigate } from "react-router-dom";


const DisplayHives = (props) => {
 
    const navigate = useNavigate()

    function handleClick(id){
        props.setSelectedHive(id);
        navigate(`/hives/update/${id}`)
    }
    function handleClickInspection(id){
        props.setSelectedHive(id);
        navigate(`/inspections/all/${id}`)
    }
    function handleClickAddInspection(id){
        props.setSelectedHive(id);
        navigate(`/inspections/add/${id}`)
    }


    
    return ( 
        <>
            <table>
                <tbody>
                    {props.hives.map((hive)=> {
                        return(
                            <tr key={hive.id} >
                            <td>{hive.hive_number}</td>
                            <td>{hive.inspection_date} </td> 
                            <td> <button onClick={() => handleClickInspection(hive.id)}> View Inspections</button></td>
                            <td> <button onClick={() => handleClickAddInspection(hive.id)}> Add Inspection</button></td>
                            <td><button onClick={() => handleClick(hive.id)}>Update</button></td>
                           
                            
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
     );
}
 
export default DisplayHives;