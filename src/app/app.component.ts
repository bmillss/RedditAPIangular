import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RedditCall } from './reddit-call';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAPICall';
  reddit?: RedditCall;

  constructor(private http: HttpClient){  }

  getReddit() {
    this.http.get<any>('https://www.reddit.com/r/aww/.json').subscribe(
      (result: RedditCall) => {
        this.reddit = result;
        console.log(this.reddit);
      }
    )
  }
}

