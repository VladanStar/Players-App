import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { PlayerCreateComponent } from './player-create/player-create.component';

import { PlayerTableComponent } from './player-table/player-table.component';
import { NavComponent } from './shared/nav/nav.component';

@NgModule({
  declarations: [AppComponent, PlayerCreateComponent, PlayerTableComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
