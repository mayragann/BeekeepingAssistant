import React from "react";

import { Link } from "react-router-dom";

const DisplayHives = ({hives}) => {

    
    
    return ( 
        <>
            <table>
                <tbody>
                    {hives.map((hives)=> {
                        return(
                            <tr key={hives.id} >
                            <td>{hives.hive_number}</td>
                            <td>{hives.inspection_date} </td> <td> <button>Inspections</button></td>
                            <td>
                            <Link
                                to={{
                                    pathname: `/hives/update/${hives.id}`,
                                }}
                                >
                                <button>Update</button>
                                </Link></td>
                           
                            
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
     );
}
 
export default DisplayHives;