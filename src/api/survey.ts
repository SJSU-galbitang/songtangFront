import api from '@/lib/customAxios';
import type { SurveyResponse } from '@/types/survey';

const handleResponse = (res: { status: number; data: any }) => {
  if (res.status < 200 || res.status >= 300) {
    return Promise.reject({
      status: res.status,
      message: "Request failed",
    });
  }
  console.log(res.data);
  return res.data;
}

export const fetchSurvey = async (emotion: string) => {
  try {
    const res = await api.get<SurveyResponse>(`/survey?emotion=${encodeURIComponent(emotion)}`);
    return handleResponse(res);
  } catch(err) {
    return Promise.reject(err);
  }
}

export const createSong = async (melodies: string[], lyrics: string[]): Promise<SurveyResponse> => {
  try {
    const res = await api.post('/song', { melodies, lyrics });
    return handleResponse(res);
  } catch(err) {
    return Promise.reject(err);
  }
}

export const submitSurveyResult = async (data: { selectedIds: string[] }) => {
  const res = await fetch('/api/survey/result', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Submit survey result failed');
  return res.json();
};

export const getLyrics = async (songId: string) => {
  const res = await fetch(`/api/song/${songId}/lyrics`);
  if (!res.ok) throw new Error('Get lyrics failed');
  return res.json();
}