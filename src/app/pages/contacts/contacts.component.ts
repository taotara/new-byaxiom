import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  pageTitle = 'Contacts';

  success: boolean = false;
  error: boolean = false;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ogc03bl',
        'template_7e04v4l',
        e.target as HTMLFormElement,
        '3j-26buNNAqoqEtsj'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.success = true;
        },
        (error) => {
          this.error = true;
        }
      );
  }
}
