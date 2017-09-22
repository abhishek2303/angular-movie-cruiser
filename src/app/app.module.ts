import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { NavbarComponent }      from './components/navbar/navbar.component';
import { FooterComponent }      from './components/footer/footer.component';
import { SearchBoxComponent }   from './components/search-box/search-box.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { DisplayMoviesComponent } from './components/display-movies/display-movies.component';

import { SearchMovieService }   from './services/search-movie.service';
import { MovieService }         from './services/movie.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchBoxComponent,
    MovieDetailComponent,
    DisplayMoviesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    SearchMovieService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
