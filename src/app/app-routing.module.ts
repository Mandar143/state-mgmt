import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StateComponent } from './state/state.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'state',component:StateComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
