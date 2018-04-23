import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// services
import { UsersService } from './services/users.service';

// components
import { UsersListComponent } from './components/users-list/users-list.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
