import { React,useState } from "react";
import { useNavigate } from "react-router-dom";


const FAQuestions = (props) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate()
    
    function handleClick(event){
        event.preventDefault();
        props.search(search)

    
        navigate(`/FAQ`)
        // navigate(`/inspections/add/`)
    }
    
    return ( 
        <>
        
            <table>
                <tbody>
                            <tr key={index} >
                            <td><button onClick={() => handleClick(props.searchTerm)}>Update</button></td>
                            </tr>
                        
                    
                </tbody>
            </table>
        </>
     );
    }
   

export default FAQuestions;


    