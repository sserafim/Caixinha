import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule,
    CustomFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule,
    CustomFormsModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
