import { useState, useEffect } from 'react';

const SongForm = ({ addSong, id, song_name, updateSong, setEdit }) => {
  const [song, setSong] = useState({ song_name: '', })

  useEffect( () => {
    if (id) {
      setSong({ song_name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateSong(id, song)
      setEdit(false)
    } else {
      addSong (song)
    }
    setSong({ song_name: '' })
  }

  return(
    <>
      <h1>{id ? "Update" : "Create"} Song</h1>
      <form onSubmit={handleSubmit}>
        <label>song_name</label>
        <input 
          song_name='song'
          value={song.song}
          onChange={(e) => setSong({...song, song_name: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SongForm;