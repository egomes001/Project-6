// import { useState } from 'react';
import '../../styles/Collapse.scss';
import chevron from '../../assets/images/chevron.png';

function Collapse({title,text}) {
    // const [isOpen, openClose] = useState(false);

	return <div className='menu'>
                <p className='menu__title'>{title}</p>
                <img src={chevron} alt="Flèche du menu déroulant" className='menu__chevron'/>
                <p className='menu__text'>{text}</p>
            </div>
}

export default Collapse;