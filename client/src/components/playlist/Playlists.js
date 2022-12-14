import { useState, useEffect } from 'react';
import axios from 'axios';
import PlaylistForm from './PlaylistForm';
import PlaylistList from './PlaylistList';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([])

  useEffect( () => {
    axios.get('/api/playlists')
      .then(res => setPlaylists(res.data))
      .catch( err => console.log(err))
  }, [])

  const addPlaylist = (playlist) => {
    axios.post('/api/playlists', { playlist })
      .then(res => setPlaylists([...playlists, res.data]))
      .catch( err => console.log(err))
  }

  const updatePlaylist = (id, playlist) => {
    axios.put(`/api/playlists/${id}`, { playlist })
      .then( res => {
        const newUpdatedPlaylist = playlists.map(l => {
          if (l.id === id) {
            return res.data
          }
          return l
        })
        setPlaylists(newUpdatedPlaylist)
      })
      .catch( err => console.log(err))
  }

  const deletePlaylist = (id) => {
    axios.delete(`/api/playlists/${id}`)
      .then( res => setPlaylists( playlists.filter( l => l.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <>
      <PlaylistForm addPlaylist={addPlaylist} />
      <h1>All Playlists</h1>
      <PlaylistList 
        playlists={playlists}
        updatePlaylist={updatePlaylist}
        deletePlaylist={deletePlaylist}
      />
    </>
  )
}
export default Playlists;
