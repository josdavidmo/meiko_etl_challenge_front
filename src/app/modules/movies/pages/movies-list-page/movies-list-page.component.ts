import {Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {Movie} from '../../shared/movie.model';
import {MovieService} from '../../shared/movie.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {UtilsHelperService} from '../../../../core/services/utils-helper.service';
import {I18n} from '@ngx-translate/i18n-polyfill';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';
import {APP_CONFIG} from '../../../../configs/app.config';

@Component({
  selector: 'app-movies-list-page',
  templateUrl: './movies-list-page.component.html',
  styleUrls: ['./movies-list-page.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 1, delay: 0}
    }))])
  ]
})

export class MoviesListPageComponent implements OnInit {

  movies: Movie[];
  newmovieForm: FormGroup;
  canVote = false;
  error: boolean;

  @ViewChild('form') myNgForm; // just to call resetForm method

  constructor(private movieService: MovieService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private router: Router,
              private i18n: I18n,
              private formBuilder: FormBuilder,
              @Inject(PLATFORM_ID) private platformId: Object,
              @Inject(APP_CONFIG) public appConfig: any) {

    this.newmovieForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'alterEgo': new FormControl('', [Validators.required, Validators.maxLength(30)])
    });

    this.onChanges();
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((res: any) => {
      const moviesR = []
      res.results.map(function (movie: any) {
        moviesR.push(new Movie(movie));
      });
      this.movies = moviesR;
    });
  }

  private onChanges() {
    this.newmovieForm.get('name').valueChanges.subscribe((value) => {
      if (value && value.length >= 3 && UtilsHelperService.isPalindrome(value)) {
        this.snackBar.open(this.i18n({value: 'Yeah that\'s a Palindrome!', id: '@@yeahPalindrome'}), '', {duration: 2000});
      } else {
        this.snackBar.dismiss();
      }
    });
  }
}
