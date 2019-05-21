import {browser, by, element} from 'protractor';
import {AppConfig} from '../../../../../src/app/configs/app.config';

export class MoviesListPage {
  static navigateTo(): any {
    return browser.get(AppConfig.routes.movies);
  }

  static getNumberMovies(): any {
    return element.all(by.css('#left mat-list-item')).count();
  }
}
