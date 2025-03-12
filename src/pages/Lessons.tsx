import React from 'react';
import { Link } from 'react-router-dom';

const Lessons: React.FC = () => {
  const lessons = [
    { id: 1, title: 'Lesson 1' },
    { id: 2, title: 'Lesson 2' },
    { id: 3, title: 'Lesson 3' },
  ];

  return (
    <div>
      <h1>Lessons</h1>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lessons;