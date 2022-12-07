import { Routes, Route } from "react-router-dom";
import Home from "./components/shared/Home";
import MainNavbar from "./components/shared/MainNavbar";
import Nomatch from "./components/shared/Nomatch";
import About from "./components/shared/About";
import Playlists from "./components/playlist/Playlists"
import Songs from "./components/song/Songs"
const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Playlists" element={<Playlists />} />
      <Route path="/*" element={<Nomatch />} />
    </Routes>
  
  </>
)

export default App;
