import {MoviesListPage} from './movies-list-page';
import {browser} from 'protractor';

describe('Movies list page', function () {
  let page;

  beforeEach(() => {
    page = new MoviesListPage();
  });

  it('should contains equal or more movies than default ones', () => {
    MoviesListPage.navigateTo();
    browser.driver.sleep(2000);
    expect<any>(MoviesListPage.getNumberMovies()).toBeGreaterThanOrEqual(8);
  });
});
