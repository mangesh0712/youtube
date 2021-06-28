import React, { useState, useEffect } from "react";
import "./css/App.css";
import { Container } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import Videolist from "./VideoList";
import Videodetails from "./VideoDetails";

const App = () => {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onFormSubmit("weeknd blinding lights");
  }, []);

  const onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data.items, "dufhdjh")
    setVideo(response.data.items);
    setSelectedVideo(response.data.items[2]);
  };
  const onVideoselect = (selectedVideo) => {
    setSelectedVideo(selectedVideo);
  };
  return (
    <React.Fragment>
      <Container style={{ marginTop: "20px" }}>
        <SearchBar onFormSubmit={onFormSubmit} />
        <div className="video-area">
          <div className="video">
            <Videodetails video={selectedVideo} />
          </div>
          <div className="video-list">
            <Videolist onVideoselect={onVideoselect} video={video} />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default App;
