import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {

  recipe: Recipe;

  constructor(private _recipeService: RecipeService, private _route: ActivatedRoute) {
    const id = this._route.snapshot.paramMap.get('id');
    this._recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
  }

  ngOnInit() {
  }

}
