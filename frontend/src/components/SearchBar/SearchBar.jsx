import React, {useState} from 'react';
import {ListGroup} from 'react-bootstrap';
import "./SearchBar.css";

const SearchBar = (props) => {

    const [searchRequest, setSearchRequest] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        props.getSearchResults(searchRequest);
        setSearchRequest('');
    }


    return (
        <>
            <div className='search-contain'>
                <form onSubmit={handleSubmit}>
                    <label className='search-label'><h4>Search:</h4></label>
                    <input type='text' placeholder="Search for a video..." className='search-input'
                        value={searchRequest}
                        onChange
                        ={(event) => setSearchRequest(event.target.value)}/>
                    <button>Search</button>
                </form>
            </div>
            <div>
                <h4 style={{color: "white",}}>Common Beekeeping Questions</h4>
            <ListGroup className='search-contain'>
                <ListGroup.Item>Finding the Queen</ListGroup.Item>
                <ListGroup.Item>What Does Brood Look Like?</ListGroup.Item>
                <ListGroup.Item>Capped Honey vs Capped Brood</ListGroup.Item>
                <ListGroup.Item>Swarming or Bearding?</ListGroup.Item>
                <ListGroup.Item>What Plants are best for pollinators?</ListGroup.Item>
            </ListGroup>
            </div>
        </>
    );
}

export default SearchBar;
