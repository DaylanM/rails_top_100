import { useState, useEffect } from 'react';

const ArtistForm = ({ addArtist, id, name, genre, updateArtist, setEdit }) => {
  const [artist, setArtist] = useState({ name: '', genre: '' })

  useEffect( () => {
    if (id) {
      setArtist({ name, genre })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateArtist(id, artist)
      setEdit(false)
    } else {
      addArtist(artist)
    }
    setArtist({ name: '', genre: '' })
  }

  return (
    <>
      <h1>{id ? "Update" : "Create"} List</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          placeholder='Name'
          name='Name'
          value={artist.name}
          onChange={(e) => setArtist({ ...artist, name: e.target.value })}
          required
        />
        <label>Genre</label>
        <input 
          placeholder='Genre'
          name='Genre'
          value={artist.genre}
          onChange={(e) => setArtist({ ...artist, genre: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ArtistForm;