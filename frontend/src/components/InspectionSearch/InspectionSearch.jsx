import {React, useState} from "react";


const SearchInspections = ({inspections, props}) => {
    const [inspectionSearch, SetInspectionSearch] = useState([]);

    function searchResults(event) {
        event.preventDefault();
        const lowerInspectionSearch = inspectionSearch.toLowerCase()
        const searchCols = [
            "eggs",
            "larvae",
            "sealed_brood",
            "covered_bees",
            "nectar_honey",
            "pollen",
            "pest_spotted",
            "pest_action",
            "notes_concerns"
        ]

        let response = inspections.filter((inspection) => {
            if (searchCols.some(element => inspection[element].toLowerCase().includes(lowerInspectionSearch))) {
                return true;
            }
        });
        props.setInspection(response)
        console.log(response)
    }
    return (<>
        <form onSubmit={searchResults}>
            <input type="text"
                value={inspectionSearch}
                onChange={
                    (e) => SetInspectionSearch(e.target.value)
                }
                placeholder="Search:..."/> {""}
                <button type="submit">Search</button>
                </form>
    </>);
}

export default SearchInspections;
