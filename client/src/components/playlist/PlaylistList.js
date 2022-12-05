import PlaylistShow from './PlaylistShow';

const PlaylistList = ({ playlists, updatePlaylist, deletePLaylist }) => (
  <>
    { lists.map(l => 
      <ListShow
        key={l.id}
        {...l}
        updatePlaylist={updatePlaylist}
        deletePLaylist={deletePLaylist}
      />
    )}
  </>
)

export default PlaylistList;