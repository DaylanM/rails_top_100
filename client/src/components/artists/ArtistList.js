import ArtistShow from './ArtistShow';

const ArtistList = ({ artists, updateArtist, deleteArtist }) => (
  <>
    { artists.map(l => 
      <ArtistShow 
        key={l.id}
        {...l}
        updateArtist={updateArtist}
        deleteArtist={deleteArtist}
      />
    )}
  </>
)

export default ArtistList;