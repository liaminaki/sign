import React from "react";
import { useParams } from "react-router-dom";

const Quiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="app-container">
      <h2>Quiz: {id ? id.charAt(0).toUpperCase() + id.slice(1) : "Unknown Lesson"}</h2>
      <p>This is the quiz page for the <strong>{id}</strong> lesson.</p>
      {/* Add your quiz logic and UI here */}
    </div>
  );
};

export default Quiz;