import React from "react";
import Card from 'react-bootstrap/Card'
import Inspection from './../../images/Inspection.svg'
import "./DisplayInspections"

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

                    {inspections.map((inspection)=> {
                        return(
                            <div key={inspection.id} className="card">
                                 <Card style={{ width: '15rem' }} >
                                 <Card.Img variant="top" src={Inspection} />
                                 <Card.Body>
                                {/* <Card.Title>Frames w/Eggs</Card.Title>
                                <Card.Text>{inspection.eggs}</Card.Text>
                                <Card.Title>Frames w/Larvae</Card.Title>
                                <Card.Text>{inspection.larvae} </Card.Text> 
                                <Card.Title>Frames w/Sealed Brood</Card.Title>
                                <Card.Text>{inspection.sealed_brood} </Card.Text>
                                <Card.Title>Frames Covered W/ Bees</Card.Title> 
                                <Card.Text>{inspection.covered_bees} </Card.Text>
                                <Card.Title>Frames w/Nectar</Card.Title> 
                                <Card.Text>{inspection.nectar_honey} </Card.Text>
                                <Card.Title>Frames w/Pollen</Card.Title> 
                                <Card.Text>{inspection.pollen} </Card.Text>
                                <Card.Title>Spotted Pests</Card.Title> 
                                <Card.Text>{inspection.pest_spotted} </Card.Text> 
                                <Card.Title>Pest Action</Card.Title>
                                <Card.Text>{inspection.pest_action} </Card.Text> 
                                <Card.Title>Notes or Concerns</Card.Title>
                                <Card.Text>{inspection.notes_concerns} </Card.Text> */}
                                <Card.Title>Inspection Date</Card.Title> 
                                <Card.Text>{inspection.inspection_date} </Card.Text> 
                                
                                <button onClick={() => handleClick(inspection)}>Update</button>
                                </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                
            
        </>
     );
}
 
export default DisplayInspections;