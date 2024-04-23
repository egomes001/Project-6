import { useState } from 'react';
import '../../styles/Collapse.scss';
import chevron from '../../assets/images/chevron.png';

function Collapse({title,text,index}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen(){
        setIsOpen(!isOpen);
    }

	return <div className={isOpen ? `menu index${index} menu--display` : `menu index${index} menu--hide`}>
            <div>
                <p className='menu__title'>{title}</p>
                <button onClick= {(e)=> toggleOpen()}><img src={chevron} alt="Flèche du menu déroulant" className= {isOpen ? 'menu__chevron menu__chevron--open' : 'menu__chevron menu__chevron--close'}/></button>
            </div>
            <p className= {isOpen ? 'menu__text menu__text--display' : 'menu__text menu__text--hide'}>{text}</p>
            </div>
}

export default Collapse;