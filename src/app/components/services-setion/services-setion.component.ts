import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-services-setion',
  templateUrl: './services-setion.component.html',
  styleUrls: ['./services-setion.component.scss']
})
export class ServicesSetionComponent {

  ngOnInit() {
    AOS.init()
  }
}
