import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Contactinfo } from '../contact-info/contact-info';

@Component({
  selector: 'app-main-component',
  imports: [RouterOutlet, Navbar, Footer, Contactinfo],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {}
