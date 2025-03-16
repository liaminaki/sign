import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassButton from '../components/GlassButton';
import NavBar from '../components/NavBar';
import icon1 from '../assets/img/alphabet.svg';
import icon2 from '../assets/img/numbers.svg';
import icon3 from '../assets/img/greetings.svg';

const Lessons: React.FC = () => {
  const navigate = useNavigate();

  const lessons = [
    { id: 1, title: 'Alphabet', icon: icon1, link: '/lessons/1' },
    { id: 2, title: 'Numbers', icon: icon2, link: '/lessons/2' },
    { id: 3, title: 'Greetings', icon: icon3, link: '/lessons/3' },
  ];

  const GoTo = (path: string) => {
    navigate(path);
  };

  return (
    <body className='app-container bg'>
      <NavBar backPath="/"/>
      <main className='ui-container'>
        <h2>Lessons</h2>
        <div className='lessons-container'>
          {lessons.map((lesson) => (
            <GlassButton 
              key={lesson.id}
              className='lesson-card'
              onClick={() => {GoTo(lesson.link)}}
            >
              <img src={lesson.icon} alt="icon"/>
              <div>{lesson.title}</div>
            </GlassButton>
          ))}
        </div>
      </main>
    </body>
  );
};

export default Lessons;