import {useState, useEffect, React} from "react";
import {Chart} from 'react-google-charts';



const InspectionTracker = ({inspections}) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let inspectionData = inspections.map(inspection => {
            return [
                inspection.inspection_date,
                inspection.eggs,
                inspection.larvae,
                inspection.sealed_brood,
                inspection.covered_bees,
                inspection.nectar_honey,
                inspection.pollen,
            ]
        });
        setChartData(inspectionData);
    }, [inspections])

    const options = {

        title: "Hive Health",
        hAxis: {
            title: "Inspections",
            titleTextStyle: {
                color: "#333"
            }
        },
        vAxis: {
            minValue: 0
        },
        chartArea: {
            width: "50%",
            height: "70%"
        }
    };

    const data = [
        [
            "Inspection Date",
            "Frames w/Eggs",
            "Frames w/Larvae",
            "Frames w/Sealed Brood",
            "Frames w/Covered With bees",
            "Frames w/Nectar and/or Honey",
            "Frames w/Pollen",
        ],
        ...chartData


    ]
    
    return (<Chart chartType="AreaChart" width="100%" height="400px"
        data={data}
        options={options}/>)
}

export default InspectionTracker;
