import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EntrieService } from '../shared/entrie.service';

@Component({
  selector: 'app-entrie-list',
  templateUrl: './entrie-list.component.html',
  styleUrls: ['./entrie-list.component.css']
})
export class EntrieListComponent implements OnInit {

  entries: Observable<any>;

  constructor(private entrieService: EntrieService) { }

  ngOnInit() {
    this.entries = this.entrieService.getAll();
  }

  excluir(entrieId) {        
    if (!confirm('Confirma a exclusão dessa Categoria')) return;

    this.entrieService.delete(entrieId);
}

}
