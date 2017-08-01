import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteService } from './restaurantes/restaurante.service';
import { HttpModule } from '@angular/http';
import { PratosComponent } from './pratos/pratos.component';
import { PratosService } from './pratos/pratos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RestaurantesComponent,
    PratosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [RestauranteService,PratosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
