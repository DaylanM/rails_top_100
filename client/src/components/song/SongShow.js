import { useState } from 'react';
import SongForm from './SongForm'; 

const SongShow = ({ id, song_name, updateSong, deleteSong }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <SongForm 
            id={id}
            song_name={song_name}
            updateSong={updateSong}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </>
        :
        <>
          <h1>{Artist}</h1>
          <p>{song}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteSong(id)}>
            Delete
          </button>
        </>
      }    
    </>
  )
}

export default SongShow;