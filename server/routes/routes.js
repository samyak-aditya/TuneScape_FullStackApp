import express from 'express';
import fetchDiscoverData from '../spotifyCore/fetchDiscoverData.js';
import fetchTrackData from '../spotifyCore/fetchTrackData.js';
import fetchArtistData from '../spotifyCore/fetchArtistData.js';
import fetchPlaylistData from '../spotifyCore/fetchPlaylistData.js';
import fetchGenreData from '../spotifyCore/fetchGenreData.js';
import fetchPodcastData from '../spotifyCore/fetchPodcastData.js';

const router = express.Router();

router.get('/discover', async (req, res, next) => {
  try {
    const discoverData = await fetchDiscoverData();
    console.log(discoverData);
    res.status(200).json(discoverData);
    res.send(discoverData);
    return discoverData 
    
  } catch (error) {
    next(error);
  }
});

router.get('/artists', async (req, res, next) => {
  try {
    const artistData = await fetchArtistData();
    console.log("++++++++++++++++");
    console.log(artistData);
    console.log("++++++++++++++++");
    res.status(200).json(artistData); // 200 OK status
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/tracks', async (req, res, next) => {
  try {
    const trackData = await fetchTrackData();
    console.log("--------------------------------");
    console.log(trackData);
    console.log("--------------------------------");
    res.status(200).json(trackData); // 200 OK status
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/playlists', async (req, res, next) => {
  try {
    const playlistData = await fetchPlaylistData();
    console.log("****************");
    console.log(playlistData);
    console.log("****************");
    res.status(200).json(playlistData); // 200 OK status
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/genre', async (req, res, next) => {
  try {
    const genreData = await fetchGenreData();
    console.log("#################");
    console.log(genreData);
    console.log("#################");
    res.status(200).json(genreData); // 200 OK status
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/podcast', async (req, res, next) => {
  try {
    const podcastData = await fetchPodcastData();
    console.log("$$$$$$$$$$$$$$$$$$$");
    console.log(podcastData);
    console.log("$$$$$$$$$$$$$$$$$$$");
    res.status(200).json(podcastData); // 200 OK status
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
