import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import bg_img1 from '../../assets/images/bg_2.png';
import rules from '../../assets/files/about.json';
import '../../styles/About.scss';

function About() {
    return (
      <div className='about'>
        <Banner bg={bg_img1}/>
        <section className='about__container'>
          {rules.map((content,index) => 
            <div key={index.toString()}>
              <Collapse title={content.title} text={content.text} index={content.index}/>
            </div>
          )}
        </section>
      </div>
    )
  }
  
export default About;