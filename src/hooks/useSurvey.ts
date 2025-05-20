import * as API from '@/api/survey';
import { useMutation, useQuery } from "@tanstack/react-query";

export const useSurvey = (emotion: string) => {
  return useQuery({
    queryKey: ["survey", emotion],
    queryFn: () => API.fetchSurvey(emotion),
    enabled: true,
  });
};

export const useCreateSong = () => {
  return useMutation({
    mutationFn: (data: { melodies: string[]; lyrics: string[] }) => API.createSong(data.melodies, data.lyrics),
    mutationKey: ["createSong"],
  });
}

export const useSubmitSurveyResult = () => {
  return useMutation({
    mutationFn: (data: { selectedIds: string[] }) => API.submitSurveyResult(data),
    mutationKey: ["submitSurveyResult"],
  });
};

