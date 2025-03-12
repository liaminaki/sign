import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className='app-container bg'>
        <div className='ui-container'>
            <h1>he<em>AR</em></h1>
            <p>
                Learn Filipino Sign Language <br/>
                through Augmented Reality
            </p>
            <nav>
                <div><Link to="/lessons">Lessons</Link></div>
                <div><Link to="/camera">Camera App</Link></div>
            </nav>
        </div>
    </div>
  );
};

export default Home;