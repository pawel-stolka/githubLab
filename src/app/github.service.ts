import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {
  userBase = 'https://api.github.com/users/';
  results: any;// string[];

  constructor(private http: HttpClient) { }

  getUser(name:string = 'octocat'){
    let url = this.userBase + '/' + name;// 'octocat'
    this.http.get(url)
    .subscribe(data => {
      this.results = data;
    })
  }

}
