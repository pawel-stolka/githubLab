import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map' 

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  userInfo: any;
  userBase = 'https://api.github.com/users/';
  query = 'octocat'; 
  username: string = 'octocat';
  // results: any;
  client_id='d26dbb03b3670269a61e';
  client_secret='0c4fb6aeba85678269c84ba55ce0ccf9c842ac75';
  userTokenParam = '?client_id='+this.client_id+'&client_secret='+this.client_secret;
  fetched: boolean = false;
  followersUrl: string;
  followers: number;
  followersAvatarUrls: any[];//: string[];
  followersAll: any[] = [];

  constructor(private http: HttpClient) {}

  // constructor(private service: GithubService) { }

  try(value) {
    console.log(value)
  }

  getUser(query) {
    let url = this.userBase + query;// this.username
    this.followersUrl = url + '/followers' + this.userTokenParam;
    console.log('followersUrl: ' + this.followersUrl);
    this.http.get(url)
      .subscribe(
        data => {
          this.userInfo = data;
          console.log(this.userInfo)
          this.fetched = true;
          this.getFollowers()
          },
        err => {
          console.log('Something went wrong...: ')
          console.log(err.error.message)
        }
      )
  }

  getFollowers() {
    this.followersAll = [];
    this.http.get(this.followersUrl)
    // .map( () => { console.log("data")})
      .subscribe(
        data => {
          // console.log(data)
          this.followers = Object.keys(data).length
          for(let key in data) {
            console.log(data[key])
            this.followersAll.push(data[key])
          }
          
        },
        err => console.log('followers went wrong...')
      )
    
  }

  ngOnInit() {
    
  }

}
