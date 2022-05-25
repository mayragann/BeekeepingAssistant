import React from "react";


import { useNavigate } from "react-router-dom";

const DisplayInspections = ({setSelectedInspection, inspections, setSelectedHive}) => {
    const navigate = useNavigate()

    function handleClick(inspection, id){
        console.log(inspection)
        setSelectedInspection(inspection.id);
        setSelectedHive(id);

        navigate(`/inspections/${inspection.id}`)
        // navigate(`/inspections/add/`)
    }

    
    
    return ( 
        <>
        
            <table>
                <tbody>
                    {inspections.map((inspection)=> {
                        return(
                            <tr key={inspection.id} >
                            <td>{inspection.eggs}</td>
                            <td>{inspection.larvae} </td> 
                            <td>{inspection.sealed_brood} </td> 
                            <td>{inspection.covered_bees} </td> 
                            <td>{inspection.nectar_honey} </td> 
                            <td>{inspection.pollen} </td> 
                            <td>{inspection.pest_spotted} </td> 
                            <td>{inspection.pest_action} </td> 
                            <td>{inspection.notes_concerns} </td> 
                            <td>{inspection.inspection_date} </td> 
                            
                            <td><button onClick={() => handleClick(inspection)}>Update</button></td>
                           
                            
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
     );
}
 
export default DisplayInspections;