import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule } from "@angular/router";
import { BlockRepairComponent } from './block-repair/block-repair.component';
import { GrusAutoComponent } from './grus-auto/grus-auto.component';
import { TrailerEquipmentComponent } from './trailer-equipment/trailer-equipment.component';
import { LightVehicleComponent } from './light-vehicle/light-vehicle.component';


const routesChildren: Routes = [
  { path: 'grus-auto', component: GrusAutoComponent },
  { path: 'trailer', component: TrailerEquipmentComponent },
  { path: 'vehicle-car', component: LightVehicleComponent },
  { path: 'repair/**', component: NotFoundComponent }
]

const routesApp: Routes = [
  { path: '', redirectTo: '/repair', pathMatch: 'full'},
  { path: 'home', redirectTo: '/repair', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'repair', component: BlockRepairComponent, children: routesChildren },
  { path: '**', component: NotFoundComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    BlockRepairComponent,
    GrusAutoComponent,
    TrailerEquipmentComponent,
    LightVehicleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
