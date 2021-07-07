import React, { useState, useEffect } from "react";

import "./css/App.css";
import { Container, Pagination } from "semantic-ui-react";

import SearchBar from "./SearchBar";
import ErrorView from "./ErrorView";
import youtube from "../apis/youtube";
import Videolist from "./VideoList";
import Videodetails from "./VideoDetails";

const App = () => {
  const [videoList, setVideoList] = useState([]);
  const [videoListForPage, setVideoListForPage] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [recordsPerPage, setRecordsPerPage] = useState(0);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    onFormSubmit("weeknd blinding lights").catch((err) => setShowError(true));
    setRecordsPerPage(7);
  }, []);

  const onFormSubmit = async (searchedTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchedTerm,
      },
    });
    if (response.status === 200) {
      setShowError(false);
      setVideoList([]);
      setVideoList(response.data.items);
      setSelectedVideo(response.data.items[0]);
      setVideoListForPage(response.data.items.slice(0, 1));
    } else {
      throw new Error(response);
    }
  };

  const onVideoselect = (selectedVideo) => setSelectedVideo(selectedVideo);

  const numberOfPages = videoList ? Math.ceil(videoList.length / recordsPerPage) : 0;

  const vdoListForPerticularPage = (videoList, selectedPage, recordPerPage) => {
    if (!videoList) {
      return [];
    } else {
      const sliceFrom = (selectedPage - 1) * recordPerPage;
      const sliceTo = selectedPage * recordPerPage;
      return videoList.slice(sliceFrom, sliceTo);
    }
  };

  const onPageChange = (e, data) =>
    setVideoListForPage(
      vdoListForPerticularPage(videoList, data.activePage, recordsPerPage)
    );

  return (
    <React.Fragment>
      <Container style={{ marginTop: "20px" }}>
        <SearchBar onFormSubmit={onFormSubmit} />
        <div className="video-area">
          {showError ? (
            <ErrorView />
          ) : (
            <>
              {" "}
              <div className="video">
                <Videodetails video={selectedVideo} />
              </div>
              <div className="video-list">
                <Videolist
                  onVideoselect={onVideoselect}
                  videoList={videoListForPage}
                />
                <Pagination
                  boundaryRange={0}
                  defaultActivePage={1}
                  ellipsisItem={null}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={1}
                  totalPages={numberOfPages}
                  onPageChange={onPageChange}
                />
              </div>{" "}
            </>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default App;
