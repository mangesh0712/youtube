import React from "react";
import "./css/Videodetails.css"
import { Segment ,Embed} from 'semantic-ui-react'

const Videodetails =({video})=>{
    if (!video){
        return <div>Loading....</div>
    }
// const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`;
return(
    <React.Fragment>
        <Segment style={{backgroundColor:"black"}}>
        {/* <div style={{borderRadius:"5px"}} className="ui embed">
       <iframe  title="videoplayer" src={videoSrc} allowFullScreen/> */}
     <Embed 
     autoplay={false}
     color='black'
     hd={false}
     id={video.id.videoId}
     iframe={{
       allowFullScreen: true,
       style: {
         padding: 10,
       },
     }}
     placeholder={video.snippet.thumbnails.medium.url}
     source="youtube"/>
    <h4 className="head">{video.snippet.title}</h4>
    <p>{video.snippet.description.slice(0,40)}</p>
    </Segment>
    </React.Fragment>
)
}
export default Videodetails;