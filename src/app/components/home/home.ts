import { Component } from '@angular/core';
import { HeaderUnderline } from '../header-underline/header-underline';

@Component({
  selector: 'app-home',
  imports: [HeaderUnderline],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
