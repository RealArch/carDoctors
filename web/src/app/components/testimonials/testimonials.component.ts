import { Component, OnInit } from '@angular/core';
import { SwiperOptions, EffectCoverflow, Swiper, Pagination } from 'swiper';
Swiper.use([EffectCoverflow, Pagination])
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      type: "bullets"
    },
    effect: 'coverflow',
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    coverflowEffect:{
      slideShadows:false
    },
    breakpoints: {
      992: {
        slidesPerView: 3
      }
    }
  }
  constructor() { }

  ngOnInit() { }

}
