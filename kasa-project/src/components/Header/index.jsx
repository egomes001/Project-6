import '../../styles/Header.scss';
import Navbar from '../Navbar/';
import logo from '../../assets/images/logo_header.png';

function Banner() {
	return <div className='header'>
        <img src= {logo} alt='Logo Kasa' className='header__logo'></img>
		<Navbar />
	</div>
}

export default Banner;