import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { AppComponent } from './app.component';
import { MultiSelectComponent } from './components/multiSelect/multiSelect.component';


@NgModule({
  declarations: [AppComponent, MultiSelectComponent],
  imports: [BrowserModule, FormsModule, AngularMultiSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
