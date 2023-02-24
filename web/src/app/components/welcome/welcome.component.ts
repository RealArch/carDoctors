import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  aboutUS = false
  constructor(
    private router: Router
  ) {
    console.log(this.router.url)
    if (this.router.url == '/about-us') {
      this.aboutUS = true
    }
  }

  ngOnInit() { }

}
