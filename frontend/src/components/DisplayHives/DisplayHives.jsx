import React from "react";

import { useNavigate } from "react-router-dom";

const DisplayHives = ({hives, setSeletedHive}) => {
    const navigate = useNavigate()

    function handleClick(id){
        setSeletedHive(id);
        navigate(`/hives/update/${id}`)
    }
    function handleClickInspection(id){
        setSeletedHive(id);
        navigate(`/inspections/all/${id}`)
    }
    
    return ( 
        <>
            <table>
                <tbody>
                    {hives.map((hive)=> {
                        return(
                            <tr key={hive.id} >
                            <td>{hive.hive_number}</td>
                            <td>{hive.inspection_date} </td> 
                            <td> <button onClick={() => handleClickInspection(hive.id)}>Inspections</button></td>
                            <td>

                                <button onClick={() => handleClick(hive.id)}>Update</button>
                                </td>
                           
                            
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
     );
}
 
export default DisplayHives;