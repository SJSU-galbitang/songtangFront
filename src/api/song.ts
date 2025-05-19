import api from '@/lib/customAxios';
import type { Song } from '@/types/song';

export const fetchSong = async (songId: string) => {
  try {
    const res = await api.get<Song>(`/song/${encodeURIComponent(songId)}`);
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