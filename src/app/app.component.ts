import { Component, OnInit } from '@angular/core';
import { MOCK_RECIPES } from './recipe/shared/recipe.mock';
import { Recipe } from './models/recipe.model';
import { RecipeService } from './recipe/shared/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTraining';
  recipes: Recipe[];


}
