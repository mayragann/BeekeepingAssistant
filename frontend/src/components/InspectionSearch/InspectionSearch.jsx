import {React, useState} from "react";


const SearchInspections = (props) => {
    const [inspectionFilter, setInspectionfilter] = useState([]);
    const [dropDownOne, setDropDownOne] = useState('ALL');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalLabel, setModalLabel] = useState('');
    
    function eggsFilter(){
        setDropDownOne('eggs')
        setModalLabel('Frames w/Eggs')
        handleShow();
    }
    function larvaeFilter(){
        setDropDownOne('larvae')
        setModalLabel('Frames w/Larvae')
        handleShow();
    }
    function sealedBroodFilter(){
        setDropDownOne('sealed_brood')
        setModalLabel('Frames w/Sealed Brood')
        handleShow();
    }
    function coveredBeesFilter(){
        setDropDownOne('covered_bees')
        setModalLabel('Frames Covered w/Bees')
        handleShow();
    }
    function NectarHoneyFilter(){
        setDropDownOne('nectar_honey')
        setModalLabel('Frames w/Nectar and/or Honey')
        handleShow();
    }
    function pollenFilter(){
        setDropDownOne('pollen')
        setModalLabel('Frames w/pollen')
        handleShow();
    }
    function pestSpottedFilter(){
        setDropDownOne('pollen')
        setModalLabel('Frames w/pollen')
        handleShow();
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
