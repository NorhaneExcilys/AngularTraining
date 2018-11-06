import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {

  recipe: Recipe;


  updateForm: FormGroup;

  constructor(private _recipeService: RecipeService, private _route: ActivatedRoute, private _router: Router) {
    const id = this._route.snapshot.paramMap.get('id');
    this._recipeService.getRecipe(id).subscribe(recipe => {
      this.recipe = recipe;
      console.log(this.recipe.name);
      this.updateForm = new FormGroup({
        name: new FormControl(this.recipe.name),
        picture: new FormControl(this.recipe.picture),
        description: new FormControl(this.recipe.description)
      });
    });

  }

  ngOnInit() {

  }

  update() {
    this.recipe.name = this.updateForm.get('name').value;
    this.recipe.picture = this.updateForm.get('picture').value;
    this.recipe.description = this.updateForm.get('description').value;

    console.log('on met à jour la recette ' + this.recipe.id);
    console.log(this.recipe);

    this._recipeService.updateRecipe(this.recipe).subscribe(
      () => {
        console.log('next');
        this._router.navigate(['/recipes']);
      },
      error => console.log('error', error)
    );

  }

}
