import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SalePipe } from './sale.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, SalePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
