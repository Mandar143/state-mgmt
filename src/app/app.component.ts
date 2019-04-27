import { Component, Inject, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'state-mgmt';
  
  constructor() {
    
    sessionStorage.setItem('name','Mandar');
    
  }
}
