import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';
import { Portfolio } from './components/portfolio/portfolio';
import { Home } from './components/home/home';
import { Component } from '@angular/core';
import { MainComponent } from './components/main-component/main-component';

export const routes: Routes = [
  { path: '', redirectTo: 'ME', pathMatch: 'full' },
  {
    path: 'ME',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'portfolio', component: Portfolio },
      { path: 'contact', component: Contact },
    ],
  },

  { path: '**', component: Notfound },
];
