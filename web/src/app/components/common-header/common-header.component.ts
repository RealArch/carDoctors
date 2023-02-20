import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {
  @Input() breadcrums: any
  @Input() headerName: any

  constructor() { }

  ngOnInit() {
    console.log(this.breadcrums)
  }

}
