import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './core/vehicle/vehicle.service';
import { ButtonComponent } from './components/button/button.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
  declarations: [AppComponent, FormInputComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonComponent, LoginFormComponent],
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
