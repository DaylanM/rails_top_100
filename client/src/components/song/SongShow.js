import { useState } from 'react';
import SongForm from './SongForm'; 
import { Link } from 'react-router-dom';

const SongShow = ({ id, name, updateSong, deleteSong }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <SongForm 
            id={id}
            name={name}
            updateSong={updateSong}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </>
        :
        <>
          <h3>{name}</h3>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteSong(id)}>
            Delete
          </button>
          <Link to={`/${id}/reviews`}>
            <button>Reviews</button>
          </Link>
        </>
      }    
    </>
  )
}

export default SongShow;