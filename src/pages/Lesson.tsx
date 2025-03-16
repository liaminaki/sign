import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import GlassButton from '../components/GlassButton';

const Lesson: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const items = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
    { id: 7, title: 'Item 7' },
    { id: 8, title: 'Item 8' },
    { id: 9, title: 'Item 9' },
    { id: 10, title: 'Item 10' },
    { id: 11, title: 'Item 11' },
    { id: 12, title: 'Item 12' },
    { id: 13, title: 'Item 13' },
    { id: 14, title: 'Item 14' },
    { id: 15, title: 'Item 15' },
    { id: 16, title: 'Item 16' },
    { id: 17, title: 'Item 17' },
    { id: 18, title: 'Item 18' }
  ];

  return (
    <div className='app-container bg'>
      <NavBar backPath="/Lessons"/>
      <main className='ui-container'>
        <header className='lesson-header'>
          <h2 className='lesson-title'>Lesson {id}</h2>
          <p className='lesson-desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </header>
        <div className='lessons-container signs-container'>
          {items.map((item) => (
            <GlassButton 
              key={item.id}
              className='lessons-card'
            >
              {item.title}
            </GlassButton>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Lesson;