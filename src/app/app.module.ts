import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { HistoryComponent } from './components/history/history.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { CharacterComponent } from './components/character/character.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,

    CarruselComponent,
    MenuComponent,
    IndexComponent,
    HistoryComponent,
    SesionComponent,
    FooterComponent,
    ContactComponent,
    CharacterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
