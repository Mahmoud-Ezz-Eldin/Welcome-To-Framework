import { Component } from '@angular/core';
import { HeaderUnderline } from '../header-underline/header-underline';

@Component({
  selector: 'app-contact',
  imports: [HeaderUnderline],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  showLabel(label: HTMLLabelElement, e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    label.classList.add('show-label');
    if (value == '') {
      label.classList.remove('show-label');
    }
  }
}
