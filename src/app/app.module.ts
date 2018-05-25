import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { routes } from './routes';
import { TopNavbarComponent } from './modules/topNavbar/topnavbar.component';
import { SideNavBarComponent } from './modules/sideNavbar/sidenavbar.component';
import { WelcomePage } from './app.welcomepage';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavBarComponent,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
