import '../../styles/Card.scss';

function Card({title, cover}) {
	return <div className='card'>
        <img src={cover} alt={title} className='card__cover'/>
        <p className='card__title'>{title}</p>
	</div>
}

export default Card;