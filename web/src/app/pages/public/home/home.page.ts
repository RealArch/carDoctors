import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions, Swiper, Pagination, EffectFade, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Animation, AnimationController } from '@ionic/angular';

Swiper.use([Pagination, EffectFade, Autoplay])

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiperHeader') swiperHeader!: SwiperComponent;
  @ViewChild('text1') text1!: ElementRef;
  @ViewChild('text2') text2!: ElementRef;
  @ViewChild('text3') text3!: ElementRef;

  config: SwiperOptions = {
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
  anim1: Animation = this.animationCtrl.create();
  anim2: Animation = this.animationCtrl.create();
  anim3: Animation = this.animationCtrl.create();


  constructor(
    private animationCtrl: AnimationController
  ) {

  }
  ionViewDidEnter() {
    // this.anim1 = this.animationCtrl.create()
    //   .addElement(this.text1.nativeElement)
    //   .duration(700)
    //   .iterations(1)
    //   .keyframes([
    //     { offset: 0, opacity: 0 },
    //     { offset: 1, opacity: 1 },
    //   ]);
    // this.anim2 = this.animationCtrl.create()
    //   .addElement(this.text2.nativeElement)
    //   .duration(700)
    //   .delay(400)
    //   .iterations(1)
    //   .keyframes([
    //     { offset: 0, opacity: 0 },
    //     { offset: 1, opacity: 1 },
    //   ]);
    // this.anim3 = this.animationCtrl.create()
    //   .addElement(this.text3.nativeElement)
    //   .duration(700)
    //   .delay(800)
    //   .iterations(1)
    //   .fromTo('opacity', 0, 1)
    //   // .keyframes([
    //   //   { offset: 0, opacity: 0 },
    //   //   { offset: 1, opacity: 1 },
    //   // ])

    // this.anim1.play()
    // this.anim2.play()
    // this.anim3.play()

  }
  ngAfterViewInit() {

    this.swiperHeader.swiperRef.autoplay.running = true;

  }
  ngOnInit() {

  }
  onSlideChange(sw:any) {
      console.log(sw)
    // this.anim1.stop()
    // this.anim2.stop()
    // this.anim3.stop()
    // this.anim1.play()
    // this.anim2.play()
    // this.anim3.play()
  }


}
