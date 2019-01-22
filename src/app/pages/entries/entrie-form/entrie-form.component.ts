import { Component, OnInit } from '@angular/core';
import { Entrie } from '../shared/entrie.model';
import { CategoryService } from '../../categories/shared/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { EntrieService } from '../shared/entrie.service';

@Component({
  selector: 'app-entrie-form',
  templateUrl: './entrie-form.component.html',
  styleUrls: ['./entrie-form.component.css']
})
export class EntrieFormComponent implements OnInit {

  entrie: any = Entrie;
  categories$;
  id;

   ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
                 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  };

  constructor(private categoriesService: CategoryService, private router: Router, private route: ActivatedRoute, private entrieService: EntrieService) {
      
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.entrieService.get(this.id).valueChanges().pipe(take(1)).subscribe(e => {
                  this.entrie = e;
            });
        } else {
          this.entrie = {
              tipoDespesa: 'despesa',
              pago: 'true',
              valor: 0
            }
        }
  }

  ngOnInit() {
    this.categories$ = this.categoriesService.getAll();
  }

  get typeOptions(): Array<any> {
    return Object.entries(Entrie.types).map(
      ([value, text]) => {
          return {
            value: value,
            text: text
          };
       }
    );
  }

  save(entrie) {
    if (this.id) {
      this.entrieService.update(this.id, entrie);
    } else {
    this.entrieService.create(entrie);
    }
    this.router.navigate(['/entries']);
  }

  delete() {
    if (!confirm('Confirma a exclusão dessa Categoria')) return;

        this.entrieService.delete(this.id);
        this.router.navigate(['/entries']);
  }

}
