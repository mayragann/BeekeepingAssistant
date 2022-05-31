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
                <form className='search-form-contain'
                    onSubmit={handleSubmit}>
                    <label className='search-label'>Search:</label>
                    <input type='text' placeholder="Search for a video..." className='search-input'
                        value={searchRequest}
                        onChange
                        ={(event) => setSearchRequest(event.target.value)}/>
                    <button c>Search</button>
                </form>
            </div>
            <div>
            <ListGroup className="faq-contain">
                <h5>Common Beekeeping Questions</h5>
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
