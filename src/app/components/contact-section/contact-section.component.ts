import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
  ngOnInit() {
    AOS.init();
  }
}
