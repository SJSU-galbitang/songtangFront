import { useQuery } from "@tanstack/react-query";
import { fetchSong } from "@/api/song";

export const useSong = (songId: string) => {
  return useQuery({
    queryKey: ["song", songId],
    queryFn: () => fetchSong(songId),
  });
}