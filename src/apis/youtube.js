import axios from "axios";

// const KEY = process.env.REACT_APP_YOUTUBEKEY;
const KEY = "AIzaSyA2sZjNZcNZ6hmkzZ1UPPj3wP9VEqKlzQU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 21,
    key: KEY,
  },
});
