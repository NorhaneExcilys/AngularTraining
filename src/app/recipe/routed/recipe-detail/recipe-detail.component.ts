import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Input()
  showInformations = false;

  shows = false;

  constructor() { }

  ngOnInit() {
    console.log('detail', this.recipe);
  }

  toggleExpand() {
    this.shows = !this.shows;
  }

}
