import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Observable<any>;

  constructor(private categoryService: CategoryService ) {
  }

  ngOnInit() {
      this.categories = this.categoryService.getAll();
  }

  excluir(categoryId) {        
        if (!confirm('Confirma a exclusão dessa Categoria')) return;

        this.categoryService.delete(categoryId);
  }

}
