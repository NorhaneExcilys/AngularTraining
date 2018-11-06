import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  recipe: Recipe;

  constructor(private _recipeService: RecipeService, private _router: Router) { }

  ngOnInit() {
    this.recipe = new Recipe();
  }

  addRecipe() {
    //console.log(this.recipe);
    this.recipe.ingredients = [
      {
        'ingredientId': 1,
        'name': 'Dark rum (Appleton Estate Reserve)'
      },
      {
        'ingredientId': 2,
        'name': 'Fresh lime juice'
      },
      {
        'ingredientId': 3,
        'name': 'Simple sirup'
      }
    ] as Ingredient[];
    //this.recipe.instructions = MOCK_RECIPES[0].instructions;
    this._recipeService.addRecipe(this.recipe).subscribe(
      () => {
        console.log('next');
        this._router.navigate(['/recipes']);
      },
      error => console.log('error', error)
    );
   // console.log(this.recipe);
  }



}
