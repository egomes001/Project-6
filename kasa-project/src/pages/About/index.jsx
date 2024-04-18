import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import bg_img1 from '../../assets/images/bg_2.png';
import rules from '../../assets/files/about.json';
import '../../styles/About.scss';

function About() {
    return (
      <div>
        <Banner bg={bg_img1}/>
        <section className='container'>
          {rules.map((content,index) => 
            <div key={index.toString()}>
              <Collapse title={content.title} text={content.text}/>
            </div>
          )}
        </section>
      </div>
    )
  }
  
export default About;