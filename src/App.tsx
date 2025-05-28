/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import MainPage from './pages/mainPage';
import Result from './pages/result';
import Survey from './pages/survey';
import SurveyMusic from './pages/survey/music';
import DetailResultPage from './pages/detailResult';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detailResult" element={<DetailResultPage />} />
          <Route>
            <Route path="/survey" element={<Survey />} />
            <Route path="/survey/music" element={<SurveyMusic />} />
          </Route>
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
