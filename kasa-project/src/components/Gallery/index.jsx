import '../../styles/Gallery.scss';
import data from '../../assets/files/logements.json';
import Card from'../Card';

function Gallery() {
	return <div className='gallery'>
        {data.map((logements, index) => 
                <div key={logements.id}>
                    <Card 
                        title={logements.title}
                        cover={logements.cover}
                    />
                </div>
        )}
    </div>
}

export default Gallery;