import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.page.html',
  styleUrls: ['./public.page.scss'],
})
export class PublicPage implements OnInit {

  constructor(
    private router:Router

  ) { 
    // router.events.subscribe(s => {
    //   if (s instanceof NavigationEnd) {
    //     const tree = router.parseUrl(router.url);
    //     if (tree.fragment) {
    //       const element = document.querySelector("#" + tree.fragment);
    //       if (element) { element.scrollIntoView(true); }
    //     }
    //   }
    // });
  }

  ngOnInit() {
  }
  // gotoAnchor(url:string){
  //   this.router.navigate([''],{queryParams:{anchor:url}})
  //   document.getElementById(url)?.scrollIntoView()

  // }
}
