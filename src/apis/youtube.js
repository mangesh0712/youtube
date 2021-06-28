import axios from "axios";

const KEY = "AIzaSyA2sZjNZcNZ6hmkzZ1UPPj3wP9VEqKlzQU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY,
  },
});
