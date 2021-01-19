import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { HomeComponent } from './home/home.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'connection', component: ConnectionComponent},
  {path: 'my-accounts', component: MyAccountsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
