import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MovieRoutingModule} from './movies-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {MoviesListPageComponent} from './pages/movies-list-page/movies-list-page.component';
import {MovieDetailPageComponent} from './pages/movie-detail-page/movie-detail-page.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MovieRoutingModule
  ],
  declarations: [
    MoviesListPageComponent,
    MovieDetailPageComponent,
  ],
})

export class MoviesModule {
}
