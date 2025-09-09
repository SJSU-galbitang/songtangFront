import { useQuery } from "@tanstack/react-query";
import { fetchSong } from "@/api/song";
import { getLyrics } from "@/api/song";

export const useSong = (songId: string) => {
  return useQuery({
    queryKey: ["song", songId],
    queryFn: () => fetchSong(songId),
  });
}

export const useGetLyrics = (songId: string) => {
  return useQuery({
    queryKey: ["lyrics", songId],
    queryFn: () => getLyrics(songId),
  })
}