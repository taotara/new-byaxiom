import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  pageTitle = 'School Manager';

  ngOnInit() {
    AOS.init();
  }
}
