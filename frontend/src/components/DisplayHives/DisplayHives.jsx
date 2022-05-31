import React from "react";
import Card from 'react-bootstrap/Card'
import Hive from './../../images/Hive.svg'
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
                    {props.hives.map((hive)=> {
                        return(
                            <div key={hive.id}>
                                <Card style={{ width: '20rem' }}  >
                                <Card.Img variant="top" src={Hive} />
                                    <Card.Body>
                            <Card.Title>Hive Number: {hive.hive_number}</Card.Title>
                            <Card.Title>Next Inspection: {hive.inspection_date} </Card.Title> 
                            <button onClick={() => handleClickInspection(hive.id)}> View Inspections</button>
                            <button onClick={() => handleClickAddInspection(hive.id)}> Add Inspection</button>
                            <button onClick={() => handleClick(hive.id)}>Update Inspection</button>
                            </Card.Body>
                            </Card>
                            </div>

                        )
                    })}
        </>
     );
}
 
export default DisplayHives;