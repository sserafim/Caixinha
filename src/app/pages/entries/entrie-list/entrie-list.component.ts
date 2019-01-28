import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { EntrieService } from '../shared/entrie.service';
import { Entrie } from '../shared/entrie.model';
import { element } from '@angular/core/src/render3';




@Component({
  selector: 'app-entrie-list',
  templateUrl: './entrie-list.component.html',
  styleUrls: ['./entrie-list.component.css']
})
export class EntrieListComponent implements OnInit, OnDestroy {

  entriesX: Entrie[] = [];
  subscriptionEnt: Subscription;


  constructor(private entrieService: EntrieService) { }

  ngOnInit() {
      this.entriesX =  this.fetchEntrie();
  }

  fetchEntrie(): Entrie[] {      
    const entriesLanc: Entrie[] = [];  

     this.subscriptionEnt = this.entrieService.getAll().subscribe(ent => {
        ent.forEach(element => {
          const xx = Object.assign(new Entrie(), element);
          entriesLanc.push(xx);
        })
      })
      return entriesLanc;
  }


  excluir(entrieId) {          
    if (!confirm('Confirma a exclusão dessa Categoria')) return;
    this.entrieService.delete(entrieId);
    this.entriesX =  this.fetchEntrie();
}



ngOnDestroy() {
  this.subscriptionEnt.unsubscribe();
}

}
