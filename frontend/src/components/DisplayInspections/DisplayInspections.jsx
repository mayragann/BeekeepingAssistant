// import React from "react";

// import { useNavigate } from "react-router-dom";

// const DisplayInspections = ({setSeletedHive}) => {
//     const navigate = useNavigate()

//     function handleClick(){
//         // setSeletedHive();
//         navigate(`/inspections/add`)
//     }
//     function handleClickInspection(id){
//         setSeletedHive(id);
//         navigate(`/inspections/all/${id}`)
//     }
    
//     return ( 
//         <>
//             <table>
//                 <tbody>
//                     {inspections.map((inspection)=> {
//                         return(
//                             <tr key={inspection.id} >
//                             <td>{inspection.eggs}</td>
//                             <td>{inspection.larvae} </td> 
//                             <td>{inspection.sealed_brood} </td> 
//                             <td>{inspection.covered_bees} </td> 
//                             <td>{inspection.nectar_honey} </td> 
//                             <td>{inspection.pollen} </td> 
//                             <td>{inspection.pest_spotted} </td> 
//                             <td>{inspection.pest_action} </td> 
//                             <td>{inspection.notes_concerns} </td> 
//                             {/* <td> <button onClick={() => handleClickInspection(hive.id)}>Add</button></td> */}
//                             {/* <td><button onClick={() => handleClick(inspection.id)}>Update</button></td> */}
                           
                            
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </>
//      );
// }
 
// export default DisplayInspections;