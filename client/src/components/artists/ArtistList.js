import ArtistShow from './ArtistShow';

const ArtistList = ({ artist, updateArtist, deleteArtist }) => (
  <>
    { artist.map(l => 
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