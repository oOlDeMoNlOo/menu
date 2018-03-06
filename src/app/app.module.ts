import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ProfileCharPipe } from './top/profile-char.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProfileCharPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
