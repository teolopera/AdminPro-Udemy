import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
    declarations : [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
    ],
    // Estas paginas tienen que ser usadas por otros componentes
    // Que se encuentran fuera de nuestro modulo, por lo cual las exportamos
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    // Importamos los componentes de Shared
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})

export class PagesModule{}

