import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from "../environments/environment";
import { initializeApp } from "firebase/app";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    // provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

