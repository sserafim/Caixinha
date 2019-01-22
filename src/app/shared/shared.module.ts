import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    CustomFormsModule,
    CurrencyMaskModule,
    CalendarModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    CustomFormsModule,
    CurrencyMaskModule,
    CalendarModule
  ]
})
export class SharedModule { }
