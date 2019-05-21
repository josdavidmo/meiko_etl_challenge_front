import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MoviesListPageComponent} from './movies-list-page.component';
import {configureTestSuite} from 'ng-bullet';
import {LoadingPlaceholderComponent} from '../../../../shared/components/loading-placeholder/loading-placeholder.component';
import {MovieService} from '../../shared/movie.service';
import {Movie} from '../../shared/movie.model';
import {of} from 'rxjs';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {APP_CONFIG, AppConfig} from '../../../../configs/app.config';
import {MockComponent, MockModule} from 'ng-mocks';
import {MatDialog, MatError, MatFormField, MatIcon, MatList, MatListItem, MatSnackBar} from '@angular/material';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid';
import {RouterTestingModule} from '@angular/router/testing';
import {TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import {I18n} from '@ngx-translate/i18n-polyfill';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MoviesListPageComponent', () => {
  let component: MoviesListPageComponent;
  let fixture: ComponentFixture<MoviesListPageComponent>;
  let router: Router;
  let navigateSpy;
  const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
  const matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open', 'dismiss']);
  const movieServiceSpy = jasmine.createSpyObj('MovieService',
    ['getMovies', 'showSnackBar']);

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MockModule(NgxScrollToFirstInvalidModule)
      ],
      declarations: [
        MockComponent(MatList),
        MockComponent(MatListItem),
        MockComponent(MatIcon),
        MockComponent(MatFormField),
        MockComponent(MatError),
        MockComponent(LoadingPlaceholderComponent),
        MoviesListPageComponent
      ],
      providers: [
        {provide: MatSnackBar, useValue: matSnackBarSpy},
        {provide: MatDialog, useValue: matDialogSpy},
        {provide: MovieService, useValue: movieServiceSpy},
        {provide: TRANSLATIONS, useValue: require(`raw-loader!./../../../../../i18n/messages.en.xlf`)},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
        I18n,
        {provide: APP_CONFIG, useValue: AppConfig}
      ]
    });

    fixture = TestBed.createComponent(MoviesListPageComponent);
    component = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
    navigateSpy = spyOn(router, 'navigate');
    movieServiceSpy.getMovies.and.returnValue(of([new Movie({is: 1, name: 'movie test'})]));
    fixture.detectChanges();
  });
});
