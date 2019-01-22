import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) {}
  
 ngOnInit() {
 }

 create(category) {
   return this.db.list('/categories').push(category);
 }

 getAll() {
   return this.db.list('/categories').snapshotChanges()
           .pipe(
             map(changes => {
                  return changes.map(cat => ({key: cat.payload.key, ...cat.payload.val() }));
             }));
 }

 get(categoryId) {
   return this.db.object('/categories/' + categoryId);
 }

 update(categoryId, category) {
   return this.db.object('/categories/' + categoryId).update(category);
 }

 delete(categoryId) {
   return this.db.object('/categories/' + categoryId).remove();
 }

}
