import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import JeffProfile from '../components/JeffProfile';

const About = () => {
  return (
    
    <div>    
        <Banner title="About Me" />
    
        <div className="about-page">
            <div className="container">
              <div className="row">
                <div className="four columns">
                  <JeffProfile />
                </div>
                <div className="eight columns">
                  <h4>Hey I'm Jeff and and I'll suck your Dick</h4>
    
                  <p>Spicy jalapeno bacon ipsum dolor amet ham rump sirloin burgdoggen. Picanha sausage tenderloin, hamburger beef venison kielbasa beef ribs shoulder turducken pork belly ball tip boudin alcatra shank. Fatback turkey tail flank shank, short loin brisket ham leberkas capicola sirloin shoulder ground round. Jerky sirloin ham burgdoggen boudin shoulder jowl pancetta drumstick cupim biltong pork belly short ribs. Drumstick tenderloin tail short loin, hamburger ribeye meatloaf. Pork chop turducken pork ham hock.</p>

                  <p>Frankfurter salami venison, doner pork jerky cow ham hock turkey kevin shank cupim ground round. Tail filet mignon short loin shoulder turducken ground round chuck ham hock alcatra. Andouille pastrami tongue ham hock biltong. Tongue ham hock biltong flank. Short ribs ribeye bacon venison frankfurter.</p>
                </div>
              </div>
            </div>
          </div>

    </div>
  
  );
}

export default About;