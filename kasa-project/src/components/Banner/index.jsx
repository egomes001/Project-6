import '../../styles/Banner.scss';
import bg_img from '../../assets/images/bg_1.png';

function Banner() {
	return <div className='banner'>
        <img src= {bg_img} alt="Paysage de falaises" className='banner__bg'></img>
        <p className='banner__imgtext'>Chez vous, partout et ailleurs</p>
    </div>
}

export default Banner;