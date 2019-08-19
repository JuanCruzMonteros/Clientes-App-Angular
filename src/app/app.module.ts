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

import { ClienteService } from './clientes/cliente.service';
import { PaginatorComponent } from './paginator/paginator.component';
import { PerfilComponent } from './clientes/perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/page/:page', component: ClientesComponent },
  { path: 'clientes/form', component: FormsComponent },
  { path: 'clientes/form/:id', component: FormsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormsComponent,
    FooterComponent,
    HeaderComponent,
    PaginatorComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
