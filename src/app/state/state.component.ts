import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  name:string ;
  constructor(private router:Router) { 
   this.name=sessionStorage.getItem('name');
    console.log(name);
  }

  ngOnInit() {
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
