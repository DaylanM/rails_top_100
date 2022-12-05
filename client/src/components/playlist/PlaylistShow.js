import { useState } from 'react';
import PlaylistForm from './PlaylistForm';
import { Link } from 'react-router-dom';

const PlaylistShow = ({ id, name, genre, updatePlaylist, deletePlaylist }) => {
    const [editing, setEdit] = useState(false)

    (
        <>
          {
            editing ?
              <>
                <PlaylistForm 
                  id={id}
                  name={name}
                  genre={genre}
                  updatePlaylist={updatePlaylist}
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
              <button onClick={() => deletePlaylist(id)}>
                Delete
              </button>
              {/* <Link to={`/${id}/playlists`}>
                <button>Playlists</button>
              </Link> */}
            </>
          }
        </>
    )
}
export defeault PlaylistShow;