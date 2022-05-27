import React from "react";
import { KEY } from './localKey'



const FrequentlyAskedQ = (props) => {
    
    const searchVideos = async (searchTerm) => {
        try {
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=5`, {

          });
          console.log(response.data.items)
          setVideos(response.data.items);
          navigate("searchResults")
    
        } catch (error) {
          console.log(error.message);
        }
      }; 
    
    
    return (  <></>);
}
 
export default FrequentlyAskedQ;