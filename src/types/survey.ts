export type SurveyResponse = {
  melodies: string[];
  lyrics: string[];
}

export type SurveyCreateResponse = {
  id: string;
  title: string;
  length: string;
}