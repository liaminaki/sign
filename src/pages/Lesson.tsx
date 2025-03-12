import React from 'react';
import { useParams } from 'react-router-dom';

const Lesson: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const items = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
  ];

  return (
    <div>
      <h1>Lesson {id}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lesson;