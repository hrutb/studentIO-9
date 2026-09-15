import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/module/material.module';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { ChildComponentComponent } from './shared/component/child-component/child-component.component';
// import { MaterialModule } from './shared/module/material.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentTableComponent,
    GetConfirmComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    MaterialModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
