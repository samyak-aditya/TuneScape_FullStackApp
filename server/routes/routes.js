import express from 'express';
import fetchDiscoverData from '../spotifyCore/fetchDiscoverData.js';
import fetchTrackData from '../spotifyCore/fetchTrackData.js';
import fetchArtistData from '../spotifyCore/fetchArtistData.js';
import fetchPlaylistData from '../spotifyCore/fetchPlaylistData.js';
import fetchGenreData from '../spotifyCore/fetchGenreData.js';
import fetchPodcastData from '../spotifyCore/fetchPodcastData.js';
import { authenticateUser, createUser } from '../controllers/auth.js';

const router = express.Router();

// Route for getting discover data
router.get('/discover', async (req, res, next) => {
  try {
    const discoverData = await fetchDiscoverData();
    res.status(200).json(discoverData);
  } catch (error) {
    next(error);
  }
});

// Route for getting artist data
router.get('/artists', async (req, res, next) => {
  try {
    const artistData = await fetchArtistData();
    res.status(200).json(artistData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for getting track data
router.get('/tracks', async (req, res, next) => {
  try {
    const trackData = await fetchTrackData();
    res.status(200).json(trackData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for getting playlist data
router.get('/playlists', async (req, res, next) => {
  try {
    const playlistData = await fetchPlaylistData();
    res.status(200).json(playlistData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for getting genre data
router.get('/genre', async (req, res, next) => {
  try {
    const genreData = await fetchGenreData();
    res.status(200).json(genreData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for getting podcast data
router.get('/podcast', async (req, res, next) => {
  try {
    const podcastData = await fetchPodcastData();
    res.status(200).json(podcastData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for user authentication (login)
router.post('/api/login', authenticateUser);

// Route for user registration (signup)
router.post('/api/signup', createUser);

export default router;
