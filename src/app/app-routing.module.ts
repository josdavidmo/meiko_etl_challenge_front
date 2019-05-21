import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404PageComponent} from './shared/pages/error404-page/error404-page.component';
import {AppConfig} from './configs/app.config';
import {MoviesListPageComponent} from './modules/movies/pages/movies-list-page/movies-list-page.component';

const routes: Routes = [
  {path: '', component: MoviesListPageComponent, pathMatch: 'full'},
  {path: AppConfig.routes.movies, loadChildren: './modules/movies/movies.module#MoviesModule'},
  {path: AppConfig.routes.error404, component: Error404PageComponent},

  {path: 'en', redirectTo: ''}, // because english language is the default one

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
