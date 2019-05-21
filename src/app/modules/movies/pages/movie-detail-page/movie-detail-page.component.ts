import {Component, OnInit} from '@angular/core';
import {Movie} from '../../shared/movie.model';
import {MovieService} from '../../shared/movie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 1, delay: 0}
    }))])
  ]
})

export class MovieDetailPageComponent implements OnInit {

  movie: Movie;

  constructor(private movieService: MovieService,
              private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getMovie(movieId).subscribe((result: any) => {
      this.movie = result.results[0];
    });
  }

  goBack(): void {
    this.router.navigate([`/`] );
  }
}
