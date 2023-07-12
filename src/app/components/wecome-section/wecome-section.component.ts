import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-wecome-section',
  templateUrl: './wecome-section.component.html',
  styleUrls: ['./wecome-section.component.scss']
})
export class WecomeSectionComponent {

  ngOnIni() {
    AOS.init();
}
}