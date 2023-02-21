import { Component, OnInit } from '@angular/core';
import { SwiperOptions, EffectCoverflow, Swiper, Pagination } from 'swiper';
Swiper.use([EffectCoverflow, Pagination])
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      name: "Andrea Sanchez",
      rol: "Client",
      testimonial: "Excelente servicio, muy atentos y dispuestos a explicarte lo necesario en tu visita!!! Super recomendados"
    },
    {
      name: "Ivan Gonzalez",
      rol: "Client",
      testimonial: "Excelente  servicio,  todo muy rápido y sin problemas, lo recomiendo  100%. Ya tengo  cita para el carro de mi esposa."
    },
    {
      name: "Susana Ballesteros",
      rol: "Client",
      testimonial: "Excelente servicio se le realizó a mi carro 100% recomendados atención personalizada"
    },
    {
      name: "Tania Moreno",
      rol: "Client",
      testimonial: "Excelente profesional, 100% recomendado."
    }
  ]
  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      type: "bullets"
    },
    effect: 'coverflow',
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      slideShadows: false
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
