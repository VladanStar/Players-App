import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerTableComponent } from './player-table/player-table.component';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{path:"", component:PlayerTableComponent},
{path:"player/add",component:PlayerCreateComponent},
{path: 'player/edit/:id', component:PlayerEditComponent},
{path:"player/:id", component: PlayerDetailComponent},
{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
