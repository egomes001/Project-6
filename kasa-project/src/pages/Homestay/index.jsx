import '../../styles/Homestay.scss';
import Error from '../../pages/Error';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';
import { useParams } from 'react-router-dom';
import data from '../../assets/files/logements.json';
import redStar from '../../assets/images/redStar.png';
import greyStar from '../../assets/images/greyStar.png';


function Homestay() {

    const homestayId = useParams().homestayId;
    const homestayData = data.find((logements) => logements.id === homestayId ?? logements);
    const ratingScale = [1, 2, 3, 4, 5];

    if(homestayData===undefined) {
        return <Error />
    }

	return <main className='homestay'>
        <Slideshow pictures={homestayData.pictures}/>
        <div className='homestay__details'>
            <section className='description'>
                <article className='description__left'>
                    <h1 className='description__left--h1'>{homestayData.title}</h1>
                    <h2 className='description__left--h2'>{homestayData.location}</h2>
                    <div className='description__left--buttons'>
                        {homestayData.tags.map((tags, index) => 
                            <button key={index.toString()}>{tags}</button>    
                    )}
                    </div>
                </article>
                <article className='description__right'>
                    <div className='description__right--host'>
                        <span>{homestayData.host.name}</span>
                        <img src={homestayData.host.picture} alt="Portrait de l'hôte" />
                    </div>
                    <div className='description__right--ratings'>
                        {ratingScale.map((value) => 
                            <img key={`star ${value}`} src={value <= homestayData.rating ? redStar : greyStar} alt={`Etoile ${value}`} />
                    )}
                    </div>
                </article>
            </section>
            <section className='collapse'>
            <div className='collapse__menu'>
                <Collapse title="Description" text={homestayData.description}/>
            </div>
            <div className='collapse__menu'>
                <Collapse title="Équipements" text={homestayData.equipments} />
            </div>
            </section>
        </div>
    </main>
}

export default Homestay;