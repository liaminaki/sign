import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import GlassButton from '../components/GlassButton';
import Modal from '../components/Modal';
import lessonData from '../data/lessonData';

const Lesson: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = lessonData[id as keyof typeof lessonData];
  const [selectedSign, setSelectedSign] = useState<typeof lesson.signs[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleModalOpen = (sign: typeof lesson.signs[0]) => {
    setSelectedSign(sign);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setSelectedSign(null);
    setIsModalOpen(false);
  }

  return (
    <div className='app-container'>
      <NavBar backPath="/lessons"/>
      <section className=''>
        <header className='lesson-header'>
          <h2 className='lesson-title'>{lesson.title}</h2>
          <p className='lesson-desc'>
            {lesson.description}
          </p>
        </header>
        <div className='lessons-container signs-container'>
          {lesson.signs.map((item) => (
            <GlassButton 
              key={item.title}
              className='card'
              onClick={() => handleModalOpen(item)}
            >
              <model-viewer
                src={item.model}
                autoplay
                shadow-intensity="1"
                environment-image="legacy"
              ></model-viewer>
              <p>{item.title}</p>
            </GlassButton>
          ))}
        </div>
      </section>
      {isModalOpen && selectedSign && (
        <Modal
          onClose={handleModalClose}
          src={selectedSign.model}
          title={selectedSign.title}
          onPractice={() => 
            navigate(`/camera?model=${selectedSign.title.toLowerCase()}`, { state: { selectedSign } })
          }
        />
      )}
    </div>
  );
};

export default Lesson;