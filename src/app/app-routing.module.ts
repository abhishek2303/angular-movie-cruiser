import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
import { NavbarComponent }      from './components/navbar/navbar.component';
import { FooterComponent }      from './components/footer/footer.component';
import { SearchBoxComponent }   from './components/search-box/search-box.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { DisplayMoviesComponent } from './components/display-movies/display-movies.component';

// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home',  component: DashboardComponent },
//   { path: 'movie/:id', component: HeroDetailComponent },
//   { path: 'search',     component: HeroesComponent }

    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchBoxComponent },
    { path: 'movie/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
