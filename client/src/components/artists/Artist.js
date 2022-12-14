import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ArtistForm from './ArtistForm';
import ArtistList from './ArtistList';

const Artist = () => {
  const [artists, setArtists] = useState([])

  const {playlistId} = useParams()

  useEffect( () => {
    axios.get(`/api/playlists/${playlistId}/artists`)
      .then( res => setArtists(res.data))
      .catch( err => console.log(err) )
  }, [])

  const addArtist = (artist) => {
    axios.post(`/api/playlists/${playlistId}/artists`, { artist })
      .then(res => setArtists([...artists, res.data]) )
      .catch( err => console.log(err) )
  }

  const updateArtist = (id, artist) => {
    axios.put(`/api/playlists/${playlistId}/artists/${id}`, { artist })
      .then(res => {
        const newUpdatedArtists = artists.map(l => {
          if (l.id === id) {
            return res.data 
          }
          return l
        })
        setArtists(newUpdatedArtists)
      })
      .catch( err => console.log(err) )
  }

  const deleteArtist = (id) => {
    axios.delete(`/api/playlists/${playlistId}/artists/${id}`)
      .then( res => setArtists(artists.filter( l => l.id !== id )))
      .catch( err => console.log(err) )
  }

  return (
    <>
      <ArtistForm addArtist={addArtist} />
      <h1>All Artists</h1>
      <ArtistList
        artists={artists}
        updateArtist={updateArtist}
        deleteArtist={deleteArtist}
      />
    </>
  )
}

export default Artist;