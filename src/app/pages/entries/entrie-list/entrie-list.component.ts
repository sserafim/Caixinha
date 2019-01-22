import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EntrieService } from '../shared/entrie.service';
import { Entrie } from '../shared/entrie.model';



@Component({
  selector: 'app-entrie-list',
  templateUrl: './entrie-list.component.html',
  styleUrls: ['./entrie-list.component.css']
})
export class EntrieListComponent implements OnInit, OnDestroy {

  entries;
  entriesX: Entrie[] = [];
  subscription: Subscription;


  constructor(private entrieService: EntrieService) { }

   ngOnInit() {
    // this.entries = this.entrieService.getAll();
    this.entriesX =  this.carregaEntrie();
    console.log('passou aqui ', this.entriesX);
  }

  carregaEntrie(): Entrie[] {
      const entriesLanc: Entrie[] = [];
     this.subscription = this.entrieService.getAll().subscribe(ent => {
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
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
