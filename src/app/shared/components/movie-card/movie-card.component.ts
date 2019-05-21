import {ChangeDetectionStrategy, Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {APP_CONFIG, AppConfig} from '../../../configs/app.config';
import {MovieService} from '../../../modules/movies/shared/movie.service';
import {Movie} from '../../../modules/movies/shared/movie.model';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {I18n} from '@ngx-translate/i18n-polyfill';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 1, delay: 0}
    }))])
  ]
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private movieService: MovieService,
              private router: Router,
              private snackBar: MatSnackBar,
              private i18n: I18n,
              @Inject(PLATFORM_ID) private platformId: Object,
              @Inject(APP_CONFIG) public appConfig: any) {
  }

  ngOnInit() {
    const color = 'blue';
  }

}
