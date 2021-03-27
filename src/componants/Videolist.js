import React from "react";
import Videoitems from "./VideoItems";
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
    <Segment>
     <List  divided relaxed>{renderedlist}</List>
    </Segment>
  </React.Fragment>
)
}
export default Videolist;