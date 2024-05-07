import '../../styles/Banner.scss';

function Banner({bg, pageType}) {
    const description =
		pageType === 'Home' ? (
			<p className='banner__imgtext'>Chez vous, partout et ailleurs</p>
		) : null;

	return <div className='banner'>
        <img src= {bg} alt="Paysage montagneux" className='banner__bg'></img>
        {description}
    </div>
}

export default Banner;