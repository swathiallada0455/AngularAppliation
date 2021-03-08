import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListInfoComponent } from './list-info/list-info.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListInfoComponent,
    AppfooterComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
