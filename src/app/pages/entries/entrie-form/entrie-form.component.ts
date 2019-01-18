import { Component, OnInit } from '@angular/core';
import { Entrie } from '../shared/entrie.model';
import { enumSelector } from '../shared/enumSelector';
import { TpDespesaEnum } from '../shared/tpDespesaEnum';

@Component({
  selector: 'app-entrie-form',
  templateUrl: './entrie-form.component.html',
  styleUrls: ['./entrie-form.component.css']
})
export class EntrieFormComponent implements OnInit {

  entrie: {} = new Entrie;
  id;
  tpDespesas = enumSelector(TpDespesaEnum);

  imaskConfig = {
    mask: Number
  };

  constructor() { 

  }

  ngOnInit() {
  }

}
