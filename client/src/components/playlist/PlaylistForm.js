import { useState, useEffect } from "react" ;

const PlaylistForm = ({ addPlaylist, id, name, genre, updatePlaylist, setEdit }) => {
    const [playlist, setPlaylist] =useState({ name: '', genre, '' })

    useEffect(() => {
        if (id) {
            setPlaylist({ name, genre })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updatePlaylist({ id, playlist })
            setEdit(false)
        } else {
            addPlaylist(playlists)
        } 
        setPlaylist({ name: '', genre: ''})
    }

    return (
        <>
          <h1>{id ? "Update" : "Create"} Playlist</h1>
          <form onSubmit={handleSubmit}>
            <label>Playlist Name</label>
            <input 
              name='name' 
              value={playlist.name} 
              onChange={(e) => setPlaylist({ ...playlist, name: e.target.value })} 
              required
            />
            <textarea
              name='genre' 
              value={playlist.desc} 
              onChange={(e) => setPlaylist({ ...playlist, genre: e.target.value })} 
              required
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        </>
    )
}
export default PlaylistForm;