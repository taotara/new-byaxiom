import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-the-company',
  templateUrl: './the-company.component.html',
  styleUrls: ['./the-company.component.scss'],
})
export class TheCompanyComponent {
  active = 1;
  pageTitle = 'The Company';

  ngOnInit() {
    AOS.init();
  }
}
