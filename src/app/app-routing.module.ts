import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerTableComponent } from './player-table/player-table.component';

const routes: Routes = [
{path:"", component:PlayerTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
