import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListPageComponent} from './pages/movies-list-page/movies-list-page.component';
import {MovieDetailPageComponent} from './pages/movie-detail-page/movie-detail-page.component';

const moviesRoutes: Routes = [
  {path: '', component: MoviesListPageComponent},
  {path: ':id', component: MovieDetailPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MovieRoutingModule {
}
