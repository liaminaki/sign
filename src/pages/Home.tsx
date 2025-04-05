import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlassButton from '../components/GlassButton';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const GoTo = (path: string) => {
    navigate(path);
  };
  
  return (
    <main className='app-container bg'>
        <section className='ui-container'>
            <h1>he<em>AR</em></h1>
            <p className='tagline'>
              Redefining what it means to hear— <br/>
              bridging communication with the Deaf <br/>
              through learning Filipino Sign Language <br/>
              with Augmented Reality <br/><br/>

              {/* <em>Hear!&emsp;Hear!&emsp;Here!</em>  <br/> */}
            </p>

            <div className='cta'>
                <GlassButton onClick={() => GoTo('/lessons')}>
                    Start Now
                </GlassButton>
            </div>
        </section>
    </main>
  );
};

export default Home;