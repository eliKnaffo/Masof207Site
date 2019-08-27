import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { Masof207InfoComponent } from './masof207-info/masof207-info.component';
import { MarineContainersInfoComponent } from './marine-containers-info/marine-containers-info.component';
import { Masof208InfoComponent } from './masof208-info/masof208-info.component';
import { EyalCargoInfoComponent } from './eyal-cargo-info/eyal-cargo-info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
{path:"",component: MainLayoutComponent},
{path:'Masof207',component:Masof207InfoComponent},
{path:'Marine',component:MarineContainersInfoComponent},
{path:'Masof208',component:Masof208InfoComponent},
{path:'Eyal',component:EyalCargoInfoComponent},
{path:'ContactUs',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
