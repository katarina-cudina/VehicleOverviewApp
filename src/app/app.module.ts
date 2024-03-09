import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './core/vehicle/vehicle.service';
import { ButtonComponent } from './components/button/button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonComponent, FormInputComponent, OverviewComponent, SearchComponent, TableComponent, FormsModule, SigninFormComponent], 
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
