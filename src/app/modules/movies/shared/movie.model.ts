import {Deserializable} from '../../../shared/interfaces/deserializable.interface';

export class Movie implements Deserializable {
  id: string;
  name: string;
  score: string;
  default: boolean;
  budget: string;
  country: string;
  duration: number;
  genre: string[];
  nameDirector: string;
  casting: string[];

  constructor(movie: any = {}) {
    this.id = movie.id;
    this.name = movie.movie_title || '';
    this.score = movie.imdb_score || '';
    this.default = movie.default || true;
    this.budget = movie.budget || '';
    this.duration =  movie.duration || 0;
    this.country = movie.country || '';
    this.genre = movie.genres || '';
    this.nameDirector = movie.director_name || '';
    this.casting = movie.actors || [];
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
