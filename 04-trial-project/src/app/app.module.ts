import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importing components
import { BodyModule } from './components/body.module';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, BodyModule],
})
export class AppModule {}
