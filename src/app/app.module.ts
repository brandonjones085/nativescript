import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionBarComponent } from './shared/action-bar/action-bar.component'
import {  NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule, 
 
    AppRoutingModule,
 
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    ActionBarComponent,

    CurrentChallengeComponent, 

 
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: []
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
