import './Academics.css'
import {Link} from 'react-router-dom'
import banner from '../../assets/Images/academics-banner.jpg'


export default function Academics (){
  return(
    <div className='academics-page'>
      {/*Hero*/}
      <section className='academics-hero'>
        <div className='academics-hero-text'>
          <h1>Academics in Lenana JSS</h1>
          <p>Fostering Exellence across disciplines.</p>
        </div>
        <img src={banner} alt="Academics Banner" className='academics-hero-img' />
      </section>

      {/*Subject Overview */}
      <section className='subjects'>
        <h2>Subjects offered</h2>
        <div className='subjects-cards'>
          <Link to ="/academics/sciences" className='subject-card'>
            <h3>Sciences</h3>
            <p>Explore Biology, Physics & Chemistry</p>
           </Link>


           <Link to ="/academis/mathematics" className='subject-card'>
            <h3>Mathematics</h3>
            <p>Strengthening logic & problem-solving</p>
           </Link>


          <Link to ="/academis/languages" className='subject-card'>
            <h3>Languages</h3>
            <p>Proficiency in English, Kiswahili & more</p>
           </Link>


            <Link to ="/academis/humanities" className='subject-card'>
            <h3>Humanities</h3>
            <p>Understanding people, cultures & history</p>
           </Link>
        </div>
      </section>

      {/*Call to Action */}
      <section className='cta'>
        <h3>Curious about our curriculum</h3>
        <Link to="/contact" className='cts-btn'>Contact Us </Link>
      </section>
    </div>
  );
}
  
