import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedrivenComponent } from './templatedrivenform/templatedriven/templatedriven.component';
import { TestDirectiveComponent } from './directives/test-directive/test-directive.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ReactivedrivenformComponent } from './reactivedriven/reactivedrivenform/reactivedrivenform.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenComponent,
    TestDirectiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ReactivedrivenformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
