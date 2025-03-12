import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Lesson from './pages/Lesson';
import CameraApp from './pages/CameraApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:id" element={<Lesson />} />
        <Route path="/camera" element={<CameraApp />} />
      </Routes>
    </Router>
  );
}

export default App;