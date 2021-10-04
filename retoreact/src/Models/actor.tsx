// To parse this data:
//
//   import { Convert, Actor } from "./file";
//
//   const actor = Convert.toActor(json);

export interface Actor {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}

export interface Result {
    adult: boolean;
    gender: number;
    id: number;
    known_for: KnownFor[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: null | string;
}

export interface KnownFor {
    adult?: boolean;
    backdrop_path?: null | string;
    genre_ids: number[];
    id: number;
    media_type: MediaType;
    original_language: OriginalLanguage;
    original_title?: string;
    overview: string;
    poster_path: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    first_air_date?: Date;
    name?: string;
    origin_country?: any[];
    original_name?: string;
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export enum OriginalLanguage {
    En = "en",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toActor(json: string): Actor {
        return JSON.parse(json);
    }

    public static actorToJson(value: Actor): string {
        return JSON.stringify(value);
    }
}