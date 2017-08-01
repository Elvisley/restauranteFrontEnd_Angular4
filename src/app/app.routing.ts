import { PratosComponent } from './pratos/pratos.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

const APP_ROUTES: Routes = [
    { path: '' , component: AppComponent },
    { path: 'restaurantes', component: RestaurantesComponent},
    { path: 'restaurante/:id/pratos', component: PratosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);