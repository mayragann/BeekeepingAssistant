import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert'


const  DisplayAlert= (props) => {
    const [show, setShow] = useState(true);   
 
    let dateTwo = +new Date();
    // This needs to be converted to a `number`
    // if you want to use numeric comparison


    
    return (
        <>
        
    {props.hives.map((hive)=> {
        const inspection_date = +new Date(hive.inspection_date);
        // Generate a new Date object... Then convert it to a number

        if (inspection_date > dateTwo){
            return
        }
        else if (inspection_date  <= dateTwo, show){
            
            // if (show) {
                
                {console.log(inspection_date)}
                return (
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible  key={hive.id}>
                <Alert.Heading >Oh snap! You got are running behind an Inspection for Hive number: {hive.hive_number} </Alert.Heading>

            </Alert>
            );
        // }
    }
        //   return <button onClick={() => setShow(true)}>Show Alert</button>;
        }
    )}
    </>
    )
}
 
export default DisplayAlert;