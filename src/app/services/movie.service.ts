import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'https://api.themoviedb.org/3/movie/'
  private api_key_string = '?api_key=bf575da31da329e19cd7e13903e67727';
  private random_movie_id = 550;

  constructor(private http: Http) { }

  getMovie(id: number) {
    const url = this.heroesUrl + id + this.api_key_string;
    return this.http.get(url, {headers: this.headers}).map(response => response.json());
  }

  // getMovieById(id: number) {
  //   console.log("Get movie by Id", id);
  //   let url = this.movieUrl + id + this.apikey;
  //   return this.http.get(url).map(response => response.json());
  // }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
