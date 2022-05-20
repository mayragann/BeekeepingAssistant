import React from "react";


const DisplayHives = (props) => {
    
    return ( 
        <>
           
            <table>
                <tbody>
                    {props.hives.map((hives)=> {
                        return(
                            <tr key={hives.id}>
                            <td>{hives.id}</td>
                            <td>{hives.hive_number}</td>
                            <td>{hives.inspection_date}  <button>More Info</button></td>
                            
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
     );
}
 
export default DisplayHives;