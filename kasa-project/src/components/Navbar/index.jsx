import '../../styles/Navbar.scss';
import {Link} from 'react-router-dom';

function Navbar() {
	return <nav className='navbar'>
        <Link to="/Home">Accueil</Link>
        <Link to="/About">A propos</Link>
    </nav>
}

export default Navbar;