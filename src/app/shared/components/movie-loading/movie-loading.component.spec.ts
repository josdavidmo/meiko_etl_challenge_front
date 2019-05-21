import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MovieLoadingComponent} from './movie-loading.component';
import {configureTestSuite} from 'ng-bullet';
import {LoadingPlaceholderComponent} from '../loading-placeholder/loading-placeholder.component';
import {MockComponent} from 'ng-mocks';
import {MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatIcon} from '@angular/material';

describe('MovieLoadingComponent', () => {
  let component: MovieLoadingComponent;
  let fixture: ComponentFixture<MovieLoadingComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        MockComponent(MatCard),
        MockComponent(MatCardHeader),
        MockComponent(MatCardTitle),
        MockComponent(MatCardSubtitle),
        MockComponent(MatIcon),
        MockComponent(LoadingPlaceholderComponent),
        MovieLoadingComponent
      ]
    });

    fixture = TestBed.createComponent(MovieLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
