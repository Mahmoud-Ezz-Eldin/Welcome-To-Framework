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
  modalImgAlt!: string;
  isModalOpen!: boolean;

  openModal(e: MouseEvent): void {
    const imageUrl: string = (e.target as HTMLImageElement).src;
    const imageAlt: string = (e.target as HTMLImageElement).alt;

    this.modalImgAlt = imageAlt;
    this.pressedImg = imageUrl;
    this.isModalOpen = true;

    console.log('hello');
  }
}
