import React from "react";
import Videoitems from "./VideoItems";
import { Segment, List } from "semantic-ui-react";

const Videolist = ({ video, onVideoselect }) => {
  const renderedlist = video.map((video) => {
    return (
      <Videoitems
        key={video.snippet.channelId}
        onvideoselect={onVideoselect}
        video={video}
      />
    );
  });
  return (
    <React.Fragment>
      <Segment>
        <List divided relaxed>
          {renderedlist}
        </List>
      </Segment>
    </React.Fragment>
  );
};
export default Videolist;
