import SongShow from './SongShow';

const SongList = ({ songs, updateSong, deleteSong }) => (
  <>
    { songs.map( c => 
      <SongShow
        key={c.id}
        {...c}
        updateSong={updateSong}
        deleteSong={deleteSong}
      />
    )}
  </>
) 

export default SongList;