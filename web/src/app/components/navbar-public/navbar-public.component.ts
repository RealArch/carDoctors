import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-public',
  templateUrl: './navbar-public.component.html',
  styleUrls: ['./navbar-public.component.scss'],
})
export class NavbarPublicComponent implements OnInit {
  scrollTop: any = 0; //Distance from top to actual scroll

  constructor() { }

  ngOnInit() {}

}
