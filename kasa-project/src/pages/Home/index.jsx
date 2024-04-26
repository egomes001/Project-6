import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import bg_img1 from '../../assets/images/bg_1.png';

function Home() {
    return (
      <main>
        <Banner bg={bg_img1} pageType={"Home"}/>
        <Gallery />
      </main>
    )
  }
  
export default Home;