import {Observable, of} from 'rxjs';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Movie} from './movie.model';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {AppConfig} from '../../../configs/app.config';
import {I18n} from '@ngx-translate/i18n-polyfill';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
    private moviesCollection: Array<Movie>;
    private baseUrl = '';

  constructor(private httpClient: HttpClient,
              private snackBar: MatSnackBar,
              private i18n: I18n,
              @Inject(PLATFORM_ID) private platformId: Object) {
    this.httpClient.get(this.baseUrl + '/movies').subscribe((res: any) => {
      this.moviesCollection = res.results;
    });
  }

  getMovies(): Observable<any> {
    return this.httpClient.get(`${AppConfig.routes.movies}`);
  }

  getMoviesByCriteria(type: string, value: string): Observable<any> {
    return this.httpClient.get(`${AppConfig.routes.movies}`, { params: {type: value} });
  }

  getMovie(id: string): Observable<any> {
    return this.httpClient.get(`${AppConfig.routes.movies}/${id}`);
  }

  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(name, 'OK', config);
  }
}
