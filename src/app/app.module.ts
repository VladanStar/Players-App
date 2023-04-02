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
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerEditComponent } from './player-edit/player-edit.component';

@NgModule({
  declarations: [AppComponent, PlayerCreateComponent, PlayerTableComponent, NavComponent, FooterComponent, PlayerEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
