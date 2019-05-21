(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-movies-movies-module"],{

/***/ "./src/app/modules/movies/movies-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/movies/movies-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MovieRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRoutingModule", function() { return MovieRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_movies_list_page_movies_list_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/movies-list-page/movies-list-page.component */ "./src/app/modules/movies/pages/movies-list-page/movies-list-page.component.ts");
/* harmony import */ var _pages_movie_detail_page_movie_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/movie-detail-page/movie-detail-page.component */ "./src/app/modules/movies/pages/movie-detail-page/movie-detail-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var moviesRoutes = [
    { path: '', component: _pages_movies_list_page_movies_list_page_component__WEBPACK_IMPORTED_MODULE_2__["MoviesListPageComponent"] },
    { path: ':id', component: _pages_movie_detail_page_movie_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailPageComponent"] }
];
var MovieRoutingModule = /** @class */ (function () {
    function MovieRoutingModule() {
    }
    MovieRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(moviesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MovieRoutingModule);
    return MovieRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/movies/movies.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/movies/movies.module.ts ***!
  \*************************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-routing.module */ "./src/app/modules/movies/movies-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_movies_list_page_movies_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/movies-list-page/movies-list-page.component */ "./src/app/modules/movies/pages/movies-list-page/movies-list-page.component.ts");
/* harmony import */ var _pages_movie_detail_page_movie_detail_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/movie-detail-page/movie-detail-page.component */ "./src/app/modules/movies/pages/movie-detail-page/movie-detail-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MoviesModule = /** @class */ (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _movies_routing_module__WEBPACK_IMPORTED_MODULE_2__["MovieRoutingModule"]
            ],
            declarations: [
                _pages_movies_list_page_movies_list_page_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListPageComponent"],
                _pages_movie_detail_page_movie_detail_page_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailPageComponent"],
            ],
        })
    ], MoviesModule);
    return MoviesModule;
}());



/***/ }),

/***/ "./src/app/modules/movies/pages/movie-detail-page/movie-detail-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/movies/pages/movie-detail-page/movie-detail-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header__title\" i18n=\"@@movieDetail\">movie detail</h1>\n<div class=\"container\" *ngIf=\"!movie\">\n  <app-movie-loading></app-movie-loading>\n</div>\n<div class=\"container\" *ngIf=\"movie\" [@fadeIn]=\"fadeIn\">\n  <ng-container>\n    <app-movie-card [movie]=\"movie\"></app-movie-card>\n    <div id=\"movie-json\">\n      <pre>{{movie | json}}</pre>\n    </div>\n  </ng-container>\n</div>\n<button mat-raised-button type=\"button\" (click)=\"goBack()\" i18n=\"@@goBack\">\n  Go back\n</button>\n"

/***/ }),

/***/ "./src/app/modules/movies/pages/movie-detail-page/movie-detail-page.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/movies/pages/movie-detail-page/movie-detail-page.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 65%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2rem; }\n\nbutton {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n@media (max-width: 600px) {\n  .container {\n    width: 90%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhbmRham9zL1Byb2plY3RzL2Zyb250X2VuZC9hbmd1bGFyNy1leGFtcGxlLWFwcC9zcmMvYXBwL21vZHVsZXMvbW92aWVzL3BhZ2VzL21vdmllLWRldGFpbC1wYWdlL21vdmllLWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcGFuZGFqb3MvUHJvamVjdHMvZnJvbnRfZW5kL2FuZ3VsYXI3LWV4YW1wbGUtYXBwL3NyYy9hcHAvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQVU7RUNlTixpQkFBVTtFQUNWLGtCQUFXO0VEZGYsZ0JBQWdCLEVBQUE7O0FBR2xCO0VDR00sZ0JERm9CO0VDR3BCLG1CREhvQjtFQ0lwQixpQkFBVTtFQUNWLGtCQUFXO0VESmYsY0FBYyxFQUFBOztBQUdoQjtFQUNFO0lBQ0UsVUFBVSxFQUFBLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21vdmllcy9wYWdlcy9tb3ZpZS1kZXRhaWwtcGFnZS9tb3ZpZS1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5zXCI7XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogNjUlO1xuICBAaW5jbHVkZSBwdXNoLS1hdXRvKCk7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbmJ1dHRvbiB7XG4gIEBpbmNsdWRlIHB1c2gtLWF1dG8oMnJlbSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuIiwiQGltcG9ydCBcImNvbG9yc1wiO1xuQGltcG9ydCBcImZ1bmN0aW9uc1wiO1xuXG5AbWl4aW4gZm9udC1zaXplKCRzaXplKSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGZvbnQtc2l6ZTogY2FsY3VsYXRlUmVtKCRzaXplKTtcbn1cblxuQG1peGluIHB1c2gtLWF1dG8oJHZlcnRpY2FsbHk6IGZhbHNlKSB7XG4gIEBpZiAkdmVydGljYWxseSB7XG4gICAgbWFyZ2luOiB7XG4gICAgICB0b3A6ICR2ZXJ0aWNhbGx5O1xuICAgICAgYm90dG9tOiAkdmVydGljYWxseTtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogYXV0bztcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIG1hcmdpbjoge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZm9udC1yb2JvdG8oJHNpemU6IGZhbHNlLCAkY29sb3VyOiBmYWxzZSwgJHdlaWdodDogZmFsc2UsICAkbGg6IGZhbHNlKSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgQGlmICRzaXplIHtcbiAgICBmb250LXNpemU6ICRzaXplO1xuICB9XG4gIEBpZiAkY29sb3VyIHtcbiAgICBjb2xvcjogJGNvbG91cjtcbiAgfVxuICBAaWYgJHdlaWdodCB7XG4gICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XG4gIH1cbiAgQGlmICRsaCB7XG4gICAgbGluZS1oZWlnaHQ6ICRsaDtcbiAgfVxufVxuXG5AbWl4aW4gdGV4dC1zbWFsbC1ncmV5KCl7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/movies/pages/movie-detail-page/movie-detail-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/movies/pages/movie-detail-page/movie-detail-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MovieDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailPageComponent", function() { return MovieDetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/movie.service */ "./src/app/modules/movies/shared/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/fesm5/ng-animate.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MovieDetailPageComponent = /** @class */ (function () {
    function MovieDetailPageComponent(movieService, location, router, activatedRoute) {
        this.movieService = movieService;
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    MovieDetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var movieId = this.activatedRoute.snapshot.paramMap.get('id');
        this.movieService.getMovie(movieId).subscribe(function (result) {
            _this.movie = result.results[0];
        });
    };
    MovieDetailPageComponent.prototype.goBack = function () {
        this.router.navigate(["/"]);
    };
    MovieDetailPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-detail-page',
            template: __webpack_require__(/*! ./movie-detail-page.component.html */ "./src/app/modules/movies/pages/movie-detail-page/movie-detail-page.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_5__["fadeIn"], {
                        params: { timing: 1, delay: 0 }
                    }))])
            ],
            styles: [__webpack_require__(/*! ./movie-detail-page.component.scss */ "./src/app/modules/movies/pages/movie-detail-page/movie-detail-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MovieDetailPageComponent);
    return MovieDetailPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-movies-movies-module.js.map