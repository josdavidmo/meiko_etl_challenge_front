import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Movie} from '../../../modules/movies/shared/movie.model';
import {MovieService} from '../../../modules/movies/shared/movie.service';
import {APP_CONFIG} from '../../../configs/app.config';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  defaultMovies: Array<Movie>;
  movieFormControl: FormControl;
  filteredMovies: any;
  criterias: Array<string>;

  constructor(private movieService: MovieService,
              @Inject(APP_CONFIG) public appConfig: any) {
    this.defaultMovies = [];
    this.movieFormControl = new FormControl();
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((res: any) => {
      const moviesR = []
      res.results.map(function (movie: any) {
        moviesR.push(new Movie(movie));
      });
      this.defaultMovies = moviesR;
    });
    this.criterias = ['Actor', 'Genre', 'Director'];
  }

  filterMovies(type: any): Movie[] {
    console.log(type)
    const  movies = [];
    this.movieService.getMoviesByCriteria(type, '1').subscribe((res: any) => {
      res.results.map(function (movie: Movie) {
        movies.push(movie);
      });
    });
    return movies;
  }
}
