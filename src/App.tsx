/** @jsxImportSource @emotion/react */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage';
import Result from './pages/result';
import Survey from './pages/survey';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
