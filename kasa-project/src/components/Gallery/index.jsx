import '../../styles/Gallery.scss';
import {Link} from 'react-router-dom';
import data from '../../assets/files/logements.json';
import Card from'../Card';

function Gallery() {

	return <div className='gallery'>
        {data.map((logements, index) => 
                <Link to={`/Homestay/${logements.id}`} key={logements.id}>
                    <Card 
                        title={logements.title}
                        cover={logements.cover}
                    />
                </Link>
        )}
    </div>
}

export default Gallery;