import React from "react";
import "./css/VideoDetails.css";
import "./css/SearchBar.css";
import { Segment, Embed, Header, Icon } from "semantic-ui-react";

const Videodetails = ({ video }) => {

  console.log(video, "vdo");
  if (!video) {
    return <></>;
  }
  return (
    <React.Fragment>
      <Segment className="bar" raised>
        <Embed
          autoplay={false}
          color="black"
          hd={true}
          id={video.id.videoId}
          iframe={{
            allowFullScreen: true,
            style: {
              padding: 10,
            },
          }}
          placeholder={video.snippet.thumbnails.medium.url}
          source="youtube"
        />
        <h4 className="head">{video.snippet.title}</h4>
        <Header as="h5">
          <Icon name="music" />
          <Header.Content>
            {" "}
            Channel : {video.snippet.channelTitle}
          </Header.Content>
        </Header>
      </Segment>
    </React.Fragment>
  );
};

export default Videodetails;
