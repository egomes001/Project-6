import '../../styles/Navbar.scss';
import {NavLink} from 'react-router-dom';

function Navbar() {
	return <nav className='navbar'>
        <NavLink to="/Home" className='navbar__link'>Accueil</NavLink>
        <NavLink to="/About" className='navbar__link'>A propos</NavLink>
    </nav>
}

export default Navbar;