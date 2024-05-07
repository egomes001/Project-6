import '../../styles/Footer.scss';
import logo from '../../assets/images/logo_footer.png';

function Footer() {
	return <div className='footer'>
        <img src= {logo} alt='Logo Kasa' className='footer__logo'></img>
        <p className='footer__credits'>© 2020 Kasa. All rights reserved</p>
	</div>
}

export default Footer;