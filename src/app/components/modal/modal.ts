import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() modalStatus: EventEmitter<boolean> = new EventEmitter();

  closeModal(): void {
    this.modalStatus.emit(false);
  }
}
