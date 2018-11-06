import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  showInformations: true;

  constructor(private _recipeService: RecipeService) {
    this._recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  ngOnInit() {

  }

}
