import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './core/vehicle/vehicle.service';
import { ButtonComponent } from './components/button/button.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchComponent, TableComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonComponent, LoginFormComponent, FormInputComponent, OverviewComponent], 
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
