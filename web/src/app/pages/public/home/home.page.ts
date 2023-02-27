import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions, Swiper, Pagination, EffectFade, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

Swiper.use([Pagination, EffectFade, Autoplay])

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiperHeader') swiperHeader!: SwiperComponent;
  configServices:SwiperOptions={
    preventClicks:false,
    preventClicksPropagation:false,
    slidesPerView:1,
    loop: true,
    pagination: {
      type: "bullets"
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      450: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 5
      }
    }
  }
  config: SwiperOptions = {
    preventClicks:false,
    preventClicksPropagation:false,

    loop: true,
    pagination: {
      type: "bullets"
    },
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
    lazy: true

  }



  constructor(
    private animationCtrl: AnimationController,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
  stopProp(ev:Event){
    console.log('aja')
    ev.stopPropagation()
  }
  ionViewWillEnter() {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     console.log(event)
    //     // Show progress spinner or progress bar
    //     console.log('Route change detected');
    //     if (event.url == '/services') {
    //       console.log('5')
          
    //     }
    // }
    // })

    
  }
  ngAfterViewInit() {

    this.swiperHeader.swiperRef.autoplay.running = true;

  }
  ngOnInit() {


  }
  onSlideChange(sw: any) {

  }


}
