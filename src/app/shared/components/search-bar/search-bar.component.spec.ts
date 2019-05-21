import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchBarComponent} from './search-bar.component';
import {MovieService} from '../../../modules/movies/shared/movie.service';
import {Router} from '@angular/router';
import {Movie} from '../../../modules/movies/shared/movie.model';
import {of} from 'rxjs';
import {configureTestSuite} from 'ng-bullet';
import {MockComponent, MockModule, MockPipe} from 'ng-mocks';
import {MatAutocompleteModule, MatFormField} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {CapitalizeFirstPipe} from '../../pipes/capitalize-first.pipe';
import {APP_CONFIG, AppConfig} from '../../../configs/app.config';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  const movieServiceSpy = jasmine.createSpyObj('MovieService', ['getMovies']);

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        MockModule(MatAutocompleteModule)
      ],
      declarations: [
        MockComponent(MatFormField),
        MockPipe(CapitalizeFirstPipe),
        SearchBarComponent
      ],
      providers: [
        {provide: MovieService, useValue: movieServiceSpy},
        {provide: APP_CONFIG, useValue: AppConfig}
      ]
    });

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.debugElement.componentInstance;
    movieServiceSpy.getMovies.and.returnValue(of([new Movie({name: 'test1', default: true})]));
    fixture.detectChanges();
  });

  it('should create movie search component', (() => {
    expect(component).toBeTruthy();
  }));
  //
  // it('should filter movies array', (() => {
  //   component.defaultMovies = [
  //     new Movie({'id': 1, 'name': 'batman', 'default': true}),
  //     new Movie({'id': 2, 'name': 'spiderman', 'default': false})
  //   ];
  //   expect(component.filterMovies('batman').length).toBe(1);
  //   expect(component.filterMovies('spiderman').length).toBe(0);
  //   expect(component.filterMovies('').length).toBe(2);
  // }));
});
