import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {FomanticUIModule} from 'ngx-fomantic-ui';
import { ToastrModule } from 'ngx-toastr';
import { FormComponent } from './form/form.component';
import { SuccessPageComponent } from './success-page/success-page.component';

@NgModule({
  imports:    
    [ BrowserModule, 
      FormsModule,
      ReactiveFormsModule,
      FomanticUIModule, 
   BrowserAnimationsModule, 
  HttpClientModule,AppRoutingModule,
],


  declarations: [ AppComponent, 
                 HelloComponent,
                  FormComponent,
                SuccessPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
