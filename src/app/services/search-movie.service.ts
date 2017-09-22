import { Injectable }     from '@angular/core';
import { Http }           from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchMovieService {
  searchResults;

  private resultSource = new BehaviorSubject<any>([]);
  currentResult = this.resultSource.asObservable();

  //https://api.themoviedb.org/3/search/movie?api_key=bf575da31da329e19cd7e13903e67727&query=dangal&page=1&include_adult=false
  private staticURL= 'https://api.themoviedb.org/3/';
  private api_key= 'bf575da31da329e19cd7e13903e67727';

  private api_url: string;

  private query_res= '';
  
  constructor(private http: Http) {  }

  search(query: string) {
    this.api_url = this.staticURL + 'search/movie' + '?' + 'api_key=' + this.api_key + '&query='
              + query + '&page=1&include_adult=false'; 

    return this.http.get(this.api_url).map(results => results.json().results);
    // this.updateResult(obs);

    // return this.http.get(this.api_url)
    //           .map(response => response.json().results)
    //           .subscribe(
    //             (data) => console.log(data),
    //             (error) => console.log("error " + error)
    //           );
  }


  updateResult(result: any) {
    this.resultSource.next(result);
  }

}
