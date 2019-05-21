import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
import {MovieLoadingComponent} from './components/movie-loading/movie-loading.component';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid';
import {LoadingPlaceholderComponent} from './components/loading-placeholder/loading-placeholder.component';
import {NgxProgressiveImageLoaderModule} from 'ngx-progressive-image-loader';
import {CapitalizeFirstPipe} from './pipes/capitalize-first.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    NgxExampleLibraryModule,
    NgxScrollToFirstInvalidModule,
    NgxProgressiveImageLoaderModule
  ],
  declarations: [
    Error404PageComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    SpinnerComponent,
    MovieCardComponent,
    MovieLoadingComponent,
    LoadingPlaceholderComponent,
    CapitalizeFirstPipe
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxExampleLibraryModule,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    SpinnerComponent,
    MovieCardComponent,
    MovieLoadingComponent,
    NgxScrollToFirstInvalidModule,
    LoadingPlaceholderComponent,
    NgxProgressiveImageLoaderModule,
    CapitalizeFirstPipe
  ]
})

export class SharedModule {
}
