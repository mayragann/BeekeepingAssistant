import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VideoPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { KEY } from "./../../localKey"

const VideoPage = () => {
  
  const [searchResults, setSearchResults] = useState('');
  const [videoId, setVideoId] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([]);
  


  useEffect(() => {
    getSearchResults();
  },[])


  async function getSearchResults(searchTerm='Bees'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=1&key=${KEY}`);
  setVideoId(response.data.items[0].id.videoId)
  setDescription(response.data.items[0].snippet.description)
  setTitle(response.data.items[0].snippet.title)
  setSearchResults(response.data.items)
  console.log(response.data.items)
}

useEffect(() => {
    const fetchRelatedVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&maxResults=3&type=video&relatedToVideoId=${videoId}`, {
        });
        setRelatedVideos(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
    };
     fetchRelatedVideos();
  }, [videoId]);
  

  

  return (
    <div className="container">
      <div className="video-reg-contain"></div>
      <div><SearchBar getSearchResults={getSearchResults}/></div>
      <div className = 'video-contain'>
        <div className="video-container">
            <div>
              <VideoPlayer videoId={videoId} 
              description={description} 
              title={title}
              relatedVideos={relatedVideos}/>
            </div>
        </div> 
      </div>
    </div>
  );
};

export default VideoPage;