import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { VirtualTokenComponent } from './components/virtual-token/virtual-token.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch:'full'},
  { path: "home", component: HomeComponent },
  { path: "token", component: VirtualTokenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
