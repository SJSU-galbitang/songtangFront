import api from '@/lib/customAxios';
import type { SurveyResponse } from '@/types/survey';

export const fetchSurvey = async (emotion: string) => {
  try {
    const res = await api.get<SurveyResponse>(`/survey?emotion=${encodeURIComponent(emotion)}`);
    if (res.status !== 200) {
      return Promise.reject({
        status: res.status,
        message: "Request failed",
      })
    }
    return res.data;
  } catch(err) {
    return Promise.reject(err);
  }
}

export const createSong = async (melodies: string[], lyrics: string[]) => {
  try {
    const res = await api.post('/song', { melodies, lyrics });
    if (res.status !== 200) {
      return Promise.reject({
        status: res.status,
        message: "Request failed",
      })
    }
    return res.data;
  } catch(err) {
    return Promise.reject(err);
  }
}