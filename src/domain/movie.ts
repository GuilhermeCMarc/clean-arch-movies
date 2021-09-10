import ICompany from "./company";
import ICountry from "./country";
import IGenre from "./genre";
import ILanguage from "./language";

export interface IMovie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | Object;
  budget: number;
  genres: Array<IGenre>;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<ICompany>;
  production_countries: Array<ICountry>;
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<ILanguage>;
  status: string; // Rumored, Planned, In Production, Post Production, Released, Canceled
  tagline: string | null;
  title: string;
  video: boolean;
  vote_avarage: number;
  vote_count: number;
}
