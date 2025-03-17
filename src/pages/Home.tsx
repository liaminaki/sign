import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlassButton from '../components/GlassButton';
import Spline from '@splinetool/react-spline';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const GoTo = (path: string) => {
    navigate(path);
  };
  
  return (
    <div className='app-container bg'>
        <main className='ui-container'>
            <h1>he<em>AR</em></h1>
            <p>
                Learn Filipino Sign Language <br/>
                through Augmented Reality
            </p>

            <div className='cta'>
                <GlassButton onClick={() => GoTo('/lessons')}>
                    Start Now
                </GlassButton>
            </div>

            <nav>
                <div><Link to="/lessons">Lessons</Link></div>
                <div><Link to="/camera">Camera App</Link></div>
            </nav>
            <div className='object'>
              <Spline scene="https://prod.spline.design/D68MuuDdAI5iWLDQ/scene.splinecode" />
            </div>
        </main>
    </div>
  );
};

export default Home;