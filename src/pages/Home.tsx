import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassButton from '../components/GlassButton';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const GoTo = (path: string) => {
    navigate(path);
  };

  return (
    <div className='app-container'>
      <main className='home'>
        <h1><em>sign</em></h1>
        <p className='tagline'>
          {/* Redefining what it means to hear— <br/> */}
          Bridging communication with the Deaf <br/>
          through learning Filipino Sign Language <br/>
          with Augmented Reality <br/><br/>

          {/* <em>Hear!&emsp;Hear!&emsp;Here!</em>  <br/> */}
        </p>

        <div className='cta'>
            <GlassButton onClick={() => GoTo('/lessons')}>
                Start Now
            </GlassButton>
        </div>
      </main>
    </div>
  );
};

export default Home;