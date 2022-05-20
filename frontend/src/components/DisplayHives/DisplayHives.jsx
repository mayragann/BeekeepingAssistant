import React from "react";
import Hive from "../Hive/Hive"

const DisplayHives = (props) => {
    
    return ( 
        <div>
           
            <table>
                <tbody>
                    {props.hives.map((hives)=> {
                        return(
                            <tr >
                            <td>{hives.id}</td>
                            <td>{hives.hive_number}</td>
                            <td>{hives.inspection_date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayHives;