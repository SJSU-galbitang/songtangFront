import * as API from '@/api/survey';
import { useMutation, useQuery } from "@tanstack/react-query";

export const useSurvey = (emotion: string) => {
  return useQuery({
    queryKey: ["survey", emotion],
    queryFn: () => API.fetchSurvey(emotion),
    enabled: !!emotion,
  });
};

export const useCreateSong = () => {
  return useMutation({
    mutationFn: (data: { melodies: string[]; lyrics: string[] }) => API.createSong(data.melodies, data.lyrics),
    mutationKey: ["createSong"],
  });
}