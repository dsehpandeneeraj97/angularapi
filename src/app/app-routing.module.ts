import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path:'favourite',component: FavouriteComponent},
  { path:'login',component:LoginComponent},
  { path: '', redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
