import { Link } from 'react-router-dom'

const MainNavbar = () => (
  <>
    <h1>Rails Top 100</h1>
    <nav>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/Playlists'>
          <li>Playlists</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default MainNavbar;