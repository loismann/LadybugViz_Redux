import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { D3testComponent } from './d3test/d3test.component';
import { FlaskTestComponent } from './flask-test/flask-test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    D3testComponent,
    FlaskTestComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




