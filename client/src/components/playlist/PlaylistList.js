import PlaylistShow from './PlaylistShow';

const PlaylistList = ({ playlists, updatePlaylist, deletePlaylist }) => (
  <>
    { playlists.map(l => 
      <PlaylistShow
        key={l.id}
        {...l}
        updatePlaylist={updatePlaylist}
        deletePlaylist={deletePlaylist}
      />
    )}
  </>
)

export default PlaylistList;