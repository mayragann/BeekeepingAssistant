import React from "react";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {

    return (  
        <div className="related-contain">
            <div><h3>Related Videos</h3></div>
            {props.relatedVideos.map((element, index) => {
                if (element.snippet){
                    return (
                    <div className='related-image' key ={index}>
                        <img src= {element.snippet.thumbnails.medium.url} onClick={() => {props.setVideoId(element.id.videoId); props.setDescription(element.snippet.description); props.setTitle(element.snippet.title)}}  className='related-image'></img>
                    </div>
                    )
                }
            })}
        </div>
    );
}
 
export default RelatedVideos;