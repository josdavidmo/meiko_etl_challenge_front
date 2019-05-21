import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {MovieDetailPageComponent} from './movie-detail-page.component';
import {configureTestSuite} from 'ng-bullet';
import {MovieLoadingComponent} from '../../../../shared/components/movie-loading/movie-loading.component';
import {MovieCardComponent} from '../../../../shared/components/movie-card/movie-card.component';
import {MockComponent, MockModule} from 'ng-mocks';
import {FirebaseModule} from '../../../../shared/modules/firebase.module';
import {MatSnackBar} from '@angular/material';
import {TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import {I18n} from '@ngx-translate/i18n-polyfill';
import {MovieService} from '../../shared/movie.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Movie} from '../../shared/movie.model';
import {of} from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('movieDetailPage', () => {
  let component: MovieDetailPageComponent;
  let fixture: ComponentFixture<MovieDetailPageComponent>;
  const matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
  const movieServiceSpy = jasmine.createSpyObj('MovieService', ['getMovie']);

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(FirebaseModule),
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        MockComponent(MovieLoadingComponent),
        MockComponent(MovieCardComponent),
        MovieDetailPageComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: 'BzTvl77YsRTtdihH0jeh'
              })
            }
          }
        },
        {provide: MatSnackBar, useValue: matSnackBarSpy},
        {provide: MovieService, useValue: movieServiceSpy},
        {provide: TRANSLATIONS, useValue: require(`raw-loader!./../../../../../i18n/messages.en.xlf`)},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
        I18n
      ]
    });

    fixture = TestBed.createComponent(MovieDetailPageComponent);
    component = fixture.debugElement.componentInstance;
    movieServiceSpy.getMovie.and.returnValue(of(new Movie({'id': '1', 'name': 'test', 'default': true})));
    fixture.detectChanges();
  });

  it('should create movie detail component', (() => {
    expect(component).toBeTruthy();
    expect(component.movie.id).toBe(1);
  }));
});
