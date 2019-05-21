import {browser, by, element} from 'protractor';

export class HomePage {
  static navigateTo(): any {
    return browser.get('/');
  }

  static getNumberMovies(): any {
    return element.all(by.css('#movies-list mat-card')).count();
  }
}
