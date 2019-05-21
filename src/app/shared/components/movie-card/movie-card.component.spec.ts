import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MovieCardComponent} from './movie-card.component';
import {APP_CONFIG, AppConfig} from '../../../configs/app.config';
import {Movie} from '../../../modules/movies/shared/movie.model';
import {configureTestSuite} from 'ng-bullet';
import {MockComponent, MockModule} from 'ng-mocks';
import {MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatIcon, MatSnackBar} from '@angular/material';
import {TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import {I18n} from '@ngx-translate/i18n-polyfill';
import {of} from 'rxjs';
import {MovieService} from '../../../modules/movies/shared/movie.service';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxProgressiveImageLoaderModule} from 'ngx-progressive-image-loader';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  const matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
  const movieServiceSpy = jasmine.createSpyObj('MovieService', ['updatemovie']);

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MockModule(NgxProgressiveImageLoaderModule)
      ],
      declarations: [
        MockComponent(MatCard),
        MockComponent(MatCardTitle),
        MockComponent(MatCardHeader),
        MockComponent(MatCardSubtitle),
        MockComponent(MatIcon),
        MovieCardComponent
      ],
      providers: [
        {provide: MatSnackBar, useValue: matSnackBarSpy},
        {provide: MovieService, useValue: movieServiceSpy},
        {provide: TRANSLATIONS, useValue: require(`raw-loader!./../../../../i18n/messages.en.xlf`)},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
        I18n,
        {provide: APP_CONFIG, useValue: AppConfig}
      ]
    });

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    movieServiceSpy.updatemovie.and.returnValue(of([new Movie({name: 'movie test'})]));
    fixture.detectChanges();
  });
});
