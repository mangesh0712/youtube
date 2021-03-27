import React from "react";
import Videoitems from "./Videoitems";
import { Segment ,List} from 'semantic-ui-react'

const Videolist = ({video, onvideoselect})=>{
  const renderedlist= video.map((video)=>{
    console.log()
        return <Videoitems 
          key={video.snippet.channelId}
          onvideoselect={onvideoselect} 
          video={video}/>
    })
return(
  <React.Fragment>
    <Segment  style={{backgroundColor:"black"}}>
     <List  divided relaxed>{renderedlist}</List>
    </Segment>
  </React.Fragment>
)
}
export default Videolist;