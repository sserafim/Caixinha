import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntrieListComponent } from './entrie-list/entrie-list.component';
import { EntrieFormComponent } from './entrie-form/entrie-form.component';

@NgModule({
  declarations: [
    EntrieListComponent, 
    EntrieFormComponent
  ],
  imports: [
    SharedModule,
    EntriesRoutingModule
    
  ] 
})
export class EntriesModule { }
