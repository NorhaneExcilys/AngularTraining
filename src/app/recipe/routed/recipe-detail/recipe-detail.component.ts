import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Output()
  recipesChange = new EventEmitter();

  @Input()
  recipe: Recipe;

  @Input()
  showInformations = false;

  shows = false;

  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {
    console.log('detail', this.recipe);
  }

  toggleExpand() {
    this.shows = !this.shows;
  }

  deleteRecipe(id: String) {
    this._recipeService.deleteRecipe(id).subscribe(
      () => {
        console.log('next');
        this.recipesChange.emit(this.recipe);
      },
      error => console.log('error', error)
    );
  }
}
