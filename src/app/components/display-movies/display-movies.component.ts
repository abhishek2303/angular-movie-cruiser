import { Component, OnInit, Input } from '@angular/core';

import { SearchMovieService } from './../../services/search-movie.service';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css'],
  providers: [SearchMovieService]
})
export class DisplayMoviesComponent implements OnInit {
  @Input() movies: Array<any>;

  constructor(private movieService: SearchMovieService) { }

  ngOnInit() {
    //this.updateMovies();
  }

  updateMovies() {
    this.movieService.currentResult
        .subscribe(movies => this.movies = movies);
  }

}
