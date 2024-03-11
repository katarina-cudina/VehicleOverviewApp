import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './core/vehicle/vehicle.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonComponent], 
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
