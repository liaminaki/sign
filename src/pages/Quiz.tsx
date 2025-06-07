import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Glass from "../components/Glass";
import "../styles/Quiz.css";
import GlassButton from "../components/GlassButton";
import { Icon } from "@iconify/react";
import lessonData from '../data/lessonData';

function shuffle<T>(array: T[]): T[] {
  // Fisher-Yates shuffle
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Quiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = lessonData[id as keyof typeof lessonData];

  // Prepare questions: each question is a sign, with 1 correct and 3 random distractors
  const questions = useMemo(() => {
    if (!lesson) return [];
    const signs = lesson.signs;
    const pool = shuffle(signs);
    return Array.from({ length: signs.length }, (_, i) => {
      const correct = pool[i % pool.length];
      // Get 3 distractors (not the correct one)
      const distractors = shuffle(signs.filter(s => s.title !== correct.title)).slice(0, 3);
      // Shuffle options
      const options = shuffle([correct, ...distractors]);
      return {
        correct,
        options,
      };
    });
  }, [lesson]);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  if (!lesson) {
    return <div className="app-container"><p>Lesson not found.</p></div>;
  }

  const question = questions[current];

  const handleSelect = (optionTitle: string) => {
    if (selected) return; // Prevent changing answer
    setSelected(optionTitle);
    setShowFeedback(true);
    if (optionTitle === question.correct.title) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowFeedback(false);
    setCurrent(c => c + 1);
  };

  if (!question) {
    // Quiz finished
    return (
      <div className="app-container">
        <NavBar backPath={`/lessons/${id}`} />
        <Glass className="quiz-container" contentClassName="quiz-content">
          <header className="quiz-header">
            <h2 className="quiz-title">Quiz Complete!</h2>
          </header>
          <section style={{ textAlign: "center" }}>
            <p>Your score: <b>{score}</b> / {questions.length}</p>
          </section>
        </Glass>
      </div>
    );
  }

  return (
    <div className="app-container">
      <NavBar backPath={`/lessons/${id}`} />
      <Glass className="quiz-container" contentClassName="quiz-content">
        <header className="quiz-header">
          <div className="quiz-header-col1">
            <h2 className="quiz-title">{lesson.title} Quiz</h2>
            <p>Question {current + 1} of {questions.length}</p>
          </div>
          <div className="quiz-header-col2">
            <p>Score</p>
            <p className="quiz-score">{score}</p>
          </div>
        </header>
        <section className="quiz-question">
          <model-viewer
            src={question.correct.model}
            autoplay
            shadow-intensity="1"
            environment-image="legacy"
            style={{ width: '100%', height: '15rem' }}
          ></model-viewer>
        </section>
        <section className="quiz-answer-input quiz-options">
          {question.options.map(option => {
            const isCorrect = option.title === question.correct.title;
            const isSelected = selected === option.title;
            const showCorrect = showFeedback && isCorrect;
            const showIncorrect = showFeedback && isSelected && !isCorrect;

            return (
              <GlassButton
                key={option.title}
                className={`quiz-option${showCorrect ? " correct" : ""}${showIncorrect ? " incorrect" : ""}`}
                contentClassName="quiz-option-content"
                onClick={() => handleSelect(option.title)}
              >
                <p className="quiz-option-text">{option.title}</p>
                {showFeedback && showCorrect && (
                  <Icon icon="icon-park-twotone:check-one" width="24" height="24" style={{ color: 'var(--green)' }} />
                )}
                {showFeedback && showIncorrect && (
                  <Icon icon="icon-park-twotone:close-one" width="24" height="24" style={{ color: 'var(--red)' }} />
                )}
              </GlassButton>
            );
          })}
        </section>
        <footer className="quiz-footer">
          <p className="quiz-feedback">
            {showFeedback && selected
              ? selected === question.correct.title
                ? "Good job!"
                : `Correct answer: ${question.correct.title}`
              : ""}
          </p>
          <button
            className='sec-button'
            onClick={handleNext}
            disabled={!showFeedback}
          >
            {current + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </footer>
      </Glass>
    </div>
  );
};

export default Quiz;