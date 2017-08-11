import { CounterComponent } from './counter/counter.component';
import { UsersComponent } from './users/users.component';
import { AppEventBusEffects } from './app.event-bus.effects';
import { AppEventBusService } from './app.event-bus.service';
import { EventBusService } from './shared/event-bus.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from "./app.reducer";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdButtonModule, MdInputModule, MdIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, UsersComponent, CounterComponent
  ],
  imports: [
    BrowserModule,
    // store bootstrapping with init call and combined reducers
    StoreModule.forRoot(reducers, {metaReducers}),
    // store side effects interceptors
    EffectsModule.forRoot([AppEventBusEffects]),
    // material design
    BrowserAnimationsModule,
    MdButtonModule, MdInputModule, MdIconModule
  ],
  providers: [
    EventBusService,
    AppEventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
