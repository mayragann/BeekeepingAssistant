import React from "react";

import { Link, useNavigate } from "react-router-dom";

const DisplayHives = ({hives, setSeletedHive}) => {
    const navigate = useNavigate()

    function handleClick(id){
        setSeletedHive(id);
        navigate(`/hives/update/${id}`)
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
                            <td> <button>Inspections</button></td>
                            <td>
                            {/* <Link
                                to={{
                                    pathname: `/hives/update/${hive.id}`,
                                }}
                                >
                                <button>Update</button>
                                </Link> */}
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