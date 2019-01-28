import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
