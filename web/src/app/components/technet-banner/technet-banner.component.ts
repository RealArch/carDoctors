import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technet-banner',
  templateUrl: './technet-banner.component.html',
  styleUrls: ['./technet-banner.component.scss'],
})
export class TechnetBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  download(url:string) {
    window.open(url, '_blank')
  }
}
