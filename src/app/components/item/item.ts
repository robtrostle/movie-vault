export interface Item {
  id: number;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  backdrop_path: string;
  vote_count: number;
  release_date?: string;
  first_air_date?: string;
  overview: string;
  routePath?: string;
}