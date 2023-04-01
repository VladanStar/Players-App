import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerTableComponent } from './player-table/player-table.component';
import { PlayerCreateComponent } from './player-create/player-create.component';

const routes: Routes = [
{path:"", component:PlayerTableComponent},
{path:"",component:PlayerCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
