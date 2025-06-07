import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassButton from '../components/GlassButton';
import NavBar from '../components/NavBar';
import lessonData from '../data/lessonData';

const Lessons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='app-container'>
      <NavBar backPath="/"/>
      <section className=''>
        <h2>Lessons</h2>
        <div className='lessons-container'>
          {Object.values(lessonData).map((lesson) => (
              <GlassButton 
                key={lesson.id}
                className='card'
                onClick={() => navigate(`/lessons/${lesson.id}`)}
              >
                <img src={lesson.icon} alt={lesson.title} />
                <p>{lesson.title}</p>
              </GlassButton>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Lessons;