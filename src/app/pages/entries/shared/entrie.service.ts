import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/shared/services/base-resource.services';

@Injectable({
  providedIn: 'root'
})
export class EntrieService extends BaseResourceService {

  constructor(protected db: AngularFireDatabase) {
    super('entries', db);
  }

}
