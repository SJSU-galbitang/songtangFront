import api from '@/lib/customAxios';
import type { SurveyResponse, SurveyCreateResponse } from '@/types/survey';

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

export const createSong = async (melody_ids: string[], lyrics_ids: string[]): Promise<SurveyCreateResponse> => {
  try {
    const res = await api.post('/song', { melody_ids, lyrics_ids });
    return handleResponse(res);
  } catch(err) {
    return Promise.reject(err);
  }
}