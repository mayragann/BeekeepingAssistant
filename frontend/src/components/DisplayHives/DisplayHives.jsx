import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const DisplayHives = (props) => {
    const { id } = useParams();
    const navigate = useNavigate()

    function handleClick(id){
        props.setSelectedHive(id);
        navigate(`/hives/update/${id}`)
    }
    function handleClickInspection(id){
        props.setSelectedHive(id);
        navigate(`/inspections/all/${id}`)
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