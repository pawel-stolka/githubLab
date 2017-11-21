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
  username: string = 'octocat';
  // results: any;
  fetched: boolean = false;
  followersUrl: string;
  followers: number;
  followersAvatarUrls: any[];//: string[];
  followersAll: any[] = [];

  constructor(private http: HttpClient) {}

  // constructor(private service: GithubService) { }

  getUser() {
    let url = this.userBase + this.username
    this.followersUrl = url + '/followers'
    this.http.get(url)
    .subscribe(
      data => {
        this.userInfo = data;
        console.log(this.userInfo)
        this.fetched = true;
        this.getFollowers()
        },
      err => console.log('Something went wrong...')
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
