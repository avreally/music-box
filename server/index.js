import axios from "axios";
import "dotenv/config";
import express from "express";
import cors from "cors";

// Creating and running a server
const app = express();
app.use(cors());

// Priority serve any static files.
app.use(express.static("server/build"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Defining variables for Genius API request
const baseURL = "https://api.genius.com/";
const searchPath = "search";
const token = process.env.CLIENT_ACCESS_TOKEN;
const headers = { Authorization: `Bearer ${token}` };

// Defining function for Genius API request
const getUserSearchResult = async (userQuery) => {
  try {
    const response = await axios.get(`${baseURL}${searchPath}`, {
      params: {
        q: userQuery,
      },
      headers,
    });
    return getSongData(response.data.response.hits[0].result);
  } catch (err) {
    console.error(err);
  }
};

// Selecting specific data from all data about song
const getSongData = (allData) => {
  const {
    title,
    artist_names: artist,
    id: songId,
    song_art_image_url: songImgUrl,
    release_date_for_display: releaseDate,
  } = allData;

  return { title, artist, songId, songImgUrl, releaseDate };
};

// Making Genius API request and sending result back to browser
app.get("/api/song", async (request, response) => {
  const result = await getUserSearchResult(request.query.search);
  response.send(result);
});
