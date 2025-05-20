import { create } from 'zustand';

export type SurveyResponse = {
  melodies: string[];
  lyrics: string[];
}

interface SurveyStore extends SurveyResponse {
  setMelodies: (melodies: string[]) => void;
  setLyrics: (lyrics: string[]) => void;
}

export const useSurveyStore = create<SurveyStore>((set) => ({
  melodies: [],
  lyrics: [],
  setMelodies: (melodies) => set({ melodies }),
  setLyrics: (lyrics) => set({ lyrics }),
}));
