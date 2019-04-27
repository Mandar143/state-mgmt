import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  loginData(username:string,password:string){
    console.log(username,password);
    if(username=="mandar"){
      this.auth.isUser=true;
      this.router.navigate(['/state']);
    }
    
    
  }

}
