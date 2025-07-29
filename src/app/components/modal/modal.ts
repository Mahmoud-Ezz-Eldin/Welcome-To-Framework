import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input() modalImg!: string;
  @Input() modalImgAlt!: string;
  @Input() isModalOpen: boolean = false;

  closeModal(): void {
    this.isModalOpen = false;
  }
}
