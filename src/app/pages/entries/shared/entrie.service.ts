import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntrieService {

  constructor(private db: AngularFireDatabase) {}

  create(entrie) {
    return this.db.list('/entries').push(entrie);
  }
 
  getAll() {
    return this.db.list('/entries').snapshotChanges()
            .pipe(
              map(changes => {
                   return changes.map(ent => ({key: ent.payload.key, ...ent.payload.val() }));
              }));
  }
 
  get(entrieId) {
    return this.db.object('/entries/' + entrieId);
  }
 
  update(entrieId, entrie) {
    return this.db.object('/entries/' + entrieId).update(entrie);
  }
 
  delete(entrieId) {
    return this.db.object('/entries/' + entrieId).remove();
  }
}
