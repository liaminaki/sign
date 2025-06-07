import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Glass from "../components/Glass";
import "../styles/Quiz.css";
import GlassButton from "../components/GlassButton";
import { Icon } from "@iconify/react";

const Quiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Quiz ID:", id);

  return (
    <div className="app-container">
        <NavBar backPath={`/lessons/${id}`} />
        <Glass className="quiz-container" contentClassName="quiz-content">
            <header className="quiz-header">
                <div className="quiz-header-col1">
                   <h2 className="quiz-title">{id ? id.charAt(0).toUpperCase() + id.slice(1) : "Unknown Lesson"} Quiz</h2>
                   <p>Question 1 of 20</p>
                </div>
                <div className="quiz-header-col2">
                    <p>Score</p>
                    <p className="quiz-score">0</p>
                </div>
            </header>
            <section className="quiz-question">
            <model-viewer
                src='/numbers/1.glb'
                autoplay
                shadow-intensity="1"
                environment-image="legacy"
                style={{ width: '100%', height: '15rem' }}
            ></model-viewer>
            </section>
            <section className="quiz-answer-input quiz-options">
                <GlassButton className="quiz-option" contentClassName="quiz-option-content">
                    <p className="quiz-option-text">Option A</p>
                </GlassButton>
                <GlassButton className="quiz-option correct" contentClassName="quiz-option-content">
                    <p className="quiz-option-text">Option A</p>
                    <Icon icon="icon-park-twotone:check-one" width="24" height="24"  style={{color: 'var(--green)'}} />
                </GlassButton>
                <GlassButton className="quiz-option incorrect" contentClassName="quiz-option-content">
                    <p className="quiz-option-text">Option A</p>
                    <Icon icon="icon-park-twotone:close-one" width="24" height="24"  style={{color: 'var(--red)'}} />
                </GlassButton>
                <GlassButton className="quiz-option" contentClassName="quiz-option-content">
                    <p className="quiz-option-text">Option A</p>
                </GlassButton>
            </section>
            <footer className="quiz-footer">
                <p className="quiz-feedback">Good job!</p>
                <button
                    className='sec-button'
                    // onClick={() => navigate(`/lessons/${id}/quiz`)}
                    // Should be initially disabled until an answer is selected
                >
                    Next 
                </button>
            </footer>
            {/* Add your quiz logic and UI here */}
        </Glass>
    </div>
  );
};

export default Quiz;