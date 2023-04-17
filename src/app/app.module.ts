import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { ItemListComponent } from './components/property-binding/item-list/item-list.component';
import { ItemDetailComponent } from './components/property-binding/item-detail/item-detail.component';
import { AttributeBindingComponent } from './components/attribute-binding/attribute-binding.component';
import { CompWithHostBindingComponent } from './components/attribute-binding/comp-with-host-binding.component';
import { MyInputWithAttributeDecoratorComponent } from './components/attribute-binding/my-input-with-attribute-decorator.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { HeroBirthday2Component } from './components/pipes/hero-birthday2/hero-birthday2.component';
import {HeroBirthdayComponent} from './components/pipes/hero-birthday1.component'

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    ItemListComponent,
    ItemDetailComponent,
    AttributeBindingComponent,
    CompWithHostBindingComponent,
    MyInputWithAttributeDecoratorComponent,
    PipesComponent,
    HeroBirthday2Component,
    HeroBirthdayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
