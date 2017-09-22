import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { MovieService } from './../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  private movie: Movie;
  
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.movieService.getMovie(+params.get('id')))
    .subscribe(movie => 
      this.movie = movie
      //console.log(this.movie);
    );
    console.log(this.movie);
  }

  goBack(){
    this.location.back();
  }

}
