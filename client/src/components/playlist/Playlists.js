import { useState, useEffect } from 'react';
import axios from 'axios';
import PlayListForm from './PlaylistForm';
import PLaylist from './PlaylistList';
import PlaylistList from './PlaylistList';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([])

  useEffect( () => {
    axios.get('/api/playlists')
      .then(res => setPlaylists(res.data))
      .catch( err => console.log(err))
  }, [])

  const addPlaylists = (playlists) => {
    axios.post('/api/playlists', { playlists })
      .then(res => setPlaylists([...playlists, res.data]))
      .catch( err => console.log(err))
  }

  const updatePlaylist = (id, playlist) => {
    axios.put(`/api/playlist/${id}`, { playlist })
      .then( res => {
        const newUpdatedPlaylist = playlists.map(l => {
          if (1.id === id) {
            return res.data
          }
          return 1
        })
        setPlaylists(newUpdatedPlaylist)
      })
      .catch( err => console.log(err))
  }

  const deletePlaylist = (id) => {
    axios.delete(`/api/playlists/${id}`)
      .then( res => setPlaylists( playlists.filter( 1 => 1.id 1== id )))
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
