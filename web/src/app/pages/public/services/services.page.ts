import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  headerName='Services'
  breadcrums=['Home','Services']
  constructor() { }

  ngOnInit() {
  }

}
