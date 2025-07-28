import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Contact } from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Contactinfo } from './components/contact-info/contact-info';
import { MainComponent } from './components/main-component/main-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Home,
    About,
    Portfolio,
    Contact,
    Contactinfo,
    Footer,
    MainComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('welcome-to-framework');
}
