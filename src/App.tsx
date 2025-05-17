/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage';
import Result from './pages/result';
import Survey from './pages/survey';
import SurveyMelody from './pages/survey/melody';
import SurveyLyric from './pages/survey/lyric';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/result" element={<Result />} />
          <Route path="survey/melody" element={<SurveyMelody />} />
          <Route path="survey/lyric" element={<SurveyLyric />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
