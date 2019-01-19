import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntrieListComponent } from './entrie-list/entrie-list.component';
import { EntrieFormComponent } from './entrie-form/entrie-form.component';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [EntrieListComponent, EntrieFormComponent],
  imports: [
    CommonModule,
    EntriesRoutingModule,
    FormsModule,
    NgbModule,
    CustomFormsModule,
    CalendarModule,
    CurrencyMaskModule
    
  ]
})
export class EntriesModule { }
