import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {VistaAdministradorComponent} from './Administrador/vista-administrador/vista-administrador.component';
import {GestionMenuComponent} from './Administrador/gestion-menu/gestion-menu.component';
import {GestionTipoPlatoComponent} from './Administrador/gestion-tipo-plato/gestion-tipo-plato.component';
import {NavbarAdministradorComponent} from './Administrador/navbar-administrador/navbar-administrador.component';
import {PedidosActivosSistemaComponent} from './Administrador/pedidos-activos-sistema/pedidos-activos-sistema.component';
import {TablaDePosicionesComponent} from './Administrador/tabla-de-posiciones/tabla-de-posiciones.component';
import {AppComponent} from './appcomponet/app.component';
import {ControlDePedidosComponent} from './Chef/control-de-pedidos/control-de-pedidos.component';
import {NavbarCheftComponent} from './Chef/navbar-cheft/navbar-cheft.component';
import {PedidoActivoComponent} from './Chef/pedido-activo/pedido-activo.component';
import {ReasignacionDePedidosComponent} from './Chef/reasignacion-de-pedidos/reasignacion-de-pedidos.component';
import {TomaDePedidosComponent} from './Chef/toma-de-pedidos/toma-de-pedidos.component';
import {VistaChefComponent} from './Chef/vista-chef/vista-chef.component';
import {FormComponent} from './form/form.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule, rutas} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { TablaDePosiciones2Component } from './Administrador/tabla-de-posiciones2/tabla-de-posiciones2.component';
import { TablaDePosiciones3Component } from './Administrador/tabla-de-posiciones3/tabla-de-posiciones3.component';
import { TablaDePosiciones4Component } from './Administrador/tabla-de-posiciones4/tabla-de-posiciones4.component';

// @ts-ignore
@NgModule({
  declarations: [
    NavbarAdministradorComponent,
    NavbarCheftComponent,
    AppComponent,
    GestionTipoPlatoComponent,
    GestionMenuComponent,
    PedidosActivosSistemaComponent,
    TablaDePosicionesComponent,
    VistaAdministradorComponent,
    ControlDePedidosComponent,
    PedidoActivoComponent,
    ReasignacionDePedidosComponent,
    TomaDePedidosComponent,
    VistaChefComponent,
    FormComponent,
    TablaDePosiciones2Component,
    TablaDePosiciones3Component,
    TablaDePosiciones4Component,
  ],
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule,
      HttpClientModule,
      RouterModule.forRoot(rutas)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
