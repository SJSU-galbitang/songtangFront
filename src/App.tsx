/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import MainPage from './pages/mainPage';
import Result from './pages/result';
import Survey from './pages/survey';
import SurveyMelody from './pages/survey/melody';
import SurveyLyric from './pages/survey/lyric';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route>
            <Route path="/survey" element={<Survey />} />
            <Route path="/survey/melody" element={<SurveyMelody />} />
            <Route path="/survey/lyrics" element={<SurveyLyric />} />
          </Route>
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
