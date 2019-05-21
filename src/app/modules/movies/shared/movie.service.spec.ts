import {TestBed} from '@angular/core/testing';
import {MovieService} from './movie.service';
import {HttpErrorResponse} from '@angular/common/http';
import {configureTestSuite} from 'ng-bullet';
import {FirebaseModule} from '../../../shared/modules/firebase.module';
import {MatSnackBar} from '@angular/material';
import {TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import {I18n} from '@ngx-translate/i18n-polyfill';

describe('MovieService', () => {
  const movieId = 'BzTvl77YsRTtdihH0jeh';
  let movieService: MovieService;
  const matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open', 'dismiss']);

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        FirebaseModule
      ],
      providers: [
        {provide: MatSnackBar, useValue: matSnackBarSpy},
        {provide: TRANSLATIONS, useValue: require(`raw-loader!./../../../../i18n/messages.en.xlf`)},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
        I18n,
        MovieService
      ]
    });

    movieService = TestBed.get(MovieService);
  });

  it('should get movie by id ' + movieId, (() => {
    movieService.getMovie(movieId).subscribe((result: any) => {
      expect(result.results[0].id).toEqual(movieId);
    });
  }));

  it('should fail getting movie by no id', (() => {
    movieService.getMovie('noId').subscribe(() => {
    }, (error) => {
      expect(error).toEqual(jasmine.any(HttpErrorResponse));
    });
  }));

});
