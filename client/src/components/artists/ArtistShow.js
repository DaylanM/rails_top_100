import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArtistForm from './ArtistForm';

const ArtistShow = ({ id, name, genre, updateArtist, deleteArtist }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { 
        editing ?
        <>
          <ArtistForm
            id={id}
            name={name}
            genre={genre}
            updateArtist={updateArtist}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <>
          <h1>{name}</h1>
          <p>{genre}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteArtist(id)}>
            Delete
          </button>
          <Link to={`/${id}/songs`}>
            <button>Songs</button>
          </Link>
        </>
      }
    </>
  )
}

export default ArtistShow;