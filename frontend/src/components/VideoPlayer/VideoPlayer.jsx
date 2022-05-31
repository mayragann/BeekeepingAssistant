
import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {



    return (  
    <div>
            <iframe 
            id="ytplayer" 
            title="MyPlayer"
            type="text/html" 
            width="640" 
            height="360"
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`}
            frameBorder="0">
    </iframe>
          <div className="video-details">
           <h3>{props.title}</h3>
           <p>{props.description}</p>
          </div>
          
         <div className="flex-container">
             {props.relatedVideos.map((video, index) => {
               if(video.snippet){
                 
                 return (
                     <div key={index} className="flex-item">

                          <div>
                              <img src={video.snippet.thumbnails.medium.url} alt="" />
                          </div>
                          <div>
                              <h6 >{video.snippet.title}</h6>
                          </div>
                      
                     </div>
                 );
               } else {
                 return null;
               }
            })}
         </div>

        </div>
        
     );
}

 
export default VideoPlayer;