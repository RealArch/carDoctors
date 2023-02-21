import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
    private router:Router

  ) { }

  ngOnInit() {}
  goTo(url:string){
    this.router.navigate([url])
  }
  goToSocial(url:string){
    window.open(url, '_blank')
  }
}
