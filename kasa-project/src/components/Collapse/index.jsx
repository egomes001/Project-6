import { useState } from 'react';
import '../../styles/Collapse.scss';
import chevron from '../../assets/images/chevron.png';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen(){
        setIsOpen(!isOpen);
    }

    const text = (typeof props.text === 'string'
                    ? props.text
                    : props.text.map((value) => <li key={value}>{value}</li>)
                    );

	return <div className={isOpen ? `menu index${props.index}` : `menu index${props.index} menu--hide`}>
            <div>
                <p className='menu__title'>{props.title}</p>
                <button onClick= {(e)=> toggleOpen()}><img src={chevron} alt="Flèche du menu déroulant" className= {isOpen ? 'menu__chevron menu__chevron--open' : 'menu__chevron menu__chevron--close'}/></button>
            </div>
            <span className= {isOpen ? 'menu__text menu__text--display' : 'menu__text menu__text--hide'}>{text}</span>
            </div>
}

export default Collapse;