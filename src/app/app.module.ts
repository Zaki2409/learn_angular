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
import {ExponentialStrengthPipe} from './components/pipes/services/exponential-strength.pipe';
import { SvgTemplateComponent } from './components/svg-template/svg-template.component';
import { DirectivesComponent } from './components/directives/directives.component'


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
    ExponentialStrengthPipe,
    SvgTemplateComponent,
    DirectivesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
