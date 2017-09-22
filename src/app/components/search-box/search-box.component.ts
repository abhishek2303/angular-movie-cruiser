import { Component, OnInit } from '@angular/core';

import { DisplayMoviesComponent } from  './../display-movies/display-movies.component';

import { SearchMovieService } from './../../services/search-movie.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  providers: [SearchMovieService]
})
export class SearchBoxComponent implements OnInit {

  private search_res: any;

  constructor(private searchservice: SearchMovieService) { }

  ngOnInit() {
    console.log("search-box-created");
  }

  performSearch(query: string) {
    // this.observe(query);
    this.search_res = this.searchservice.search(query)
                  .subscribe(movies => { 
                    this.search_res = movies; 
                    console.log(movies); 
                    console.log(this.search_res); 
                    this.searchservice.updateResult(movies);
                  });
    // this.search_res = this.searchservice.movieSearch(query);
    // this.search_res = this.search_res;
    // console.log(this.search_res);
  }

  // observe(query: string) {
  //   this.search_res = this.searchservice.movieSearch(query)
  //   .subscribe(movies => { this.search_res = movies; console.log(movies); console.log(this.search_res) });
  // }


}
