import { Component, Input, Output } from '@angular/core';
import { HeaderUnderline } from '../header-underline/header-underline';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-portfolio',
  imports: [HeaderUnderline, Modal],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  pressedImg!: string;
  modalClass!: string;

  openModal(e: MouseEvent): void {
    const imageUrl: string = (e.target as HTMLImageElement).src;
    this.pressedImg = imageUrl;
    this.modalClass = 'd-flex justify-content-center align-items-center';
  }
}
