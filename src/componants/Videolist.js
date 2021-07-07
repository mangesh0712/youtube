import React from "react";
import Videoitems from "./VideoItems";
import { Segment, List } from "semantic-ui-react";

const Videolist = ({ videoList, onVideoselect }) => {
  const renderedlist =
    videoList !== null
      ? videoList.map((video) => {
          return (
            <Videoitems
              key={video.snippet.channelId}
              onvideoselect={onVideoselect}
              video={video}
            />
          );
        })
      : [];
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
