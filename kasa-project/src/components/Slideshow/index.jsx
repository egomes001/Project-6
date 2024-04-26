import { useState } from 'react';
import '../../styles/Slideshow.scss';
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';

function Slideshow(props) {
    const [pictureNumber, setpictureNumber] = useState(0);

    const slideSize = props.pictures.length;

    function goToNextSlide () {
        const nextSlide = (pictureNumber + 1) % slideSize;
        setpictureNumber(nextSlide);
    }

    function goToPreviousSlide () {
        const previousSlide = (pictureNumber - 1);
        setpictureNumber(previousSlide < 0 ? slideSize -1 : previousSlide);
    }

	return <div className='slideshow'>
        {props.pictures.map((img,index) =>
            <img key={`img${index}`} src={img} alt='Illustration du logement' className={`slideshow__picture ${index === pictureNumber ? 'slideshow__picture--active' : ''}`}/>
        )}
        {slideSize > 1 && <div className='slideshow__overlay'>
            <img src={leftArrow} alt='Flèche de défilement gauche' className='slideshow__overlay--left' onClick={(e)=>goToPreviousSlide()}/>
            <img src={rightArrow} alt='Flèche de défilement right' className='slideshow__overlay--right' onClick={(e)=>goToNextSlide()}/>
            <span className='slideshow__overlay--number'>{`${pictureNumber+1} / ${slideSize}`}</span>
            </div>}
        </div>
}

export default Slideshow;