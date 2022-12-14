import { Routes, Route } from "react-router-dom";
import Home from "./components/shared/Home";
import MainNavbar from "./components/shared/MainNavbar";
import Nomatch from "./components/shared/Nomatch";
import About from "./components/shared/About";
import Playlists from "./components/playlist/Playlists"
import Artist from "./components/artists/Artist";
import Songs from "./components/song/Songs";
import Reviews from "./components/reviews/Reviews";

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Playlists" element={<Playlists />} />
      <Route path="/:playlistId/artists" element={<Artist />} />
      <Route path="/:artistId/songs" element={<Songs />} />
      <Route path="/:songId/reviews" element={<Reviews />} />
      <Route path="/*" element={<Nomatch />} />
    </Routes>
  
  </>
)

export default App;
