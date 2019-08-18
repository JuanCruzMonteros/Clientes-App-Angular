import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './clientes/forms/forms.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from "@angular/common";
import localeES from '@angular/common/locales/es';
import { ClienteService } from './clientes/cliente.service';

registerLocaleData(localeES,'es');

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: FormsComponent },
  { path: 'clientes/form/:id', component: FormsComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService, {provide: LOCALE_ID,useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
