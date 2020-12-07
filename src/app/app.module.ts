import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PtabComponent } from './prduct/ptab.component';
import { PformComponent } from './prduct/pform.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,PtabComponent,PformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
