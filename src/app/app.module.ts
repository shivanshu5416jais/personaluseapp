import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobhomeComponent } from './jobhome/jobhome.component';
import { HomeComponent } from './home/home.component';
import { InterceptorInterceptor } from './interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    JobhomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi:true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
