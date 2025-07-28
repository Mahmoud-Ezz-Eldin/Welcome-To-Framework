import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input() modalImg!: string;
  @Input() modalClasses: string = 'd-none';
  closeModal(e: HTMLDivElement): void {
    e.classList.add('d-none');
  }
}
