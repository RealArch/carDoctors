import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-public',
  templateUrl: './public.page.html',
  styleUrls: ['./public.page.scss'],
})
export class PublicPage implements OnInit {

  constructor(
    private router:Router,
    private menuController:MenuController

  ) { 
  }

  ngOnInit() {
  }
  closeMenu(){
    this.menuController.close()
  }
}
