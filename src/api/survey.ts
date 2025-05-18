import api from '@/lib/customAxios';
import type { SurveyResponse } from '@/types/survey';

const handleResponse = (res: { status: number; data: any }) => {
  if (res.status < 200 || res.status >= 300) {
    return Promise.reject({
      status: res.status,
      message: "Request failed",
    });
  }
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