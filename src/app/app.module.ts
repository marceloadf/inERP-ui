import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';

import { AppComponent } from './app.component';
import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentoPesquisaComponent,
    NavbarComponent,
    PessoaPesquisaComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    MenuModule,
    SlideMenuModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
