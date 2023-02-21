import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  headerName='About Us'
  breadcrums=['Home','About Us']
  constructor() { }

  ngOnInit() {
  }

}
