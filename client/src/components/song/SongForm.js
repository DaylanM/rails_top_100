import { useState, useEffect } from 'react';

const SongForm = ({ addSong, id, name, updateSong, setEdit }) => {
  const [song, setSong] = useState({ name: '', })

  useEffect( () => {
    if (id) {
      setSong({ name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateSong(id, song)
      setEdit(false)
    } else {
      addSong(song)
    }
    setSong({ name: '' })
  }

  return(
    <>
      <h1>{id ? "Update" : "Create"} Song</h1>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input 
          name='name'
          value={song.name}
          onChange={(e) => setSong({...song, name: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SongForm;