import '../../styles/Navbar.scss';
import {Link} from 'react-router-dom';

function Navbar() {
	return <nav className='navbar'>
        <Link to="/Home" className='navbar__link'>Accueil</Link>
        <Link to="/About" className='navbar__link'>A propos</Link>
    </nav>
}

export default Navbar;