import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { Masof207InfoComponent } from './masof207-info/masof207-info.component';
import { MarineContainersInfoComponent } from './marine-containers-info/marine-containers-info.component';
import { Masof208InfoComponent } from './masof208-info/masof208-info.component';
import { EyalCargoInfoComponent } from './eyal-cargo-info/eyal-cargo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    Masof207InfoComponent,
    MarineContainersInfoComponent,
    Masof208InfoComponent,
    EyalCargoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
