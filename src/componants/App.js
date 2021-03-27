import React from "react";
import "./css/App.css"
import { Container } from 'semantic-ui-react'
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import Videolist from "./Videolist";
import Videodetails from "./Videodetails";

class App extends React.Component{
 state= {video :[], selectedVideo :null};
 componentDidMount(){
   this.onFormSubmit("taboo tom");
 }
  onFormSubmit= async (term)=>{
    console.log(term);
    const response= await youtube.get("/search",{
      params: {
        q: term 
      }
    })
    this.setState({
      video : response.data.items,
      selectedVideo: response.data.items[2]
    })
 }
onvideoselect =(selectedVideo)=>{
// console.log("from the app", video);
this.setState({selectedVideo})
}
  render(){ 
    const {video,selectedVideo}=this.state
    return(
      <React.Fragment>
        <Container style={{"marginTop":"20px"}}>
      <SearchBar onFormSubmit={this.onFormSubmit} />
         <div className="video-area">
          
           <div className="video">
              <Videodetails video={selectedVideo}/>
          </div>
           <div className="video-list"> 
             <Videolist onvideoselect ={this.onvideoselect} video= {video}/>
         </div> 
      </div>
      </Container>
      </React.Fragment>
     )
  }
}

export default App;