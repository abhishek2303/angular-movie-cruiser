import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DatabaseCommentService {
  comment_base: Comment[];

  constructor(private http: Http) { }



}
