import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { Observable, of } from 'rxjs';
import { MOCK_RECIPES } from './recipe.mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  //readonly SERVER_URL = 'http://10.0.1.136:8080/api/v1/recipes';

  constructor(private _httpClient: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return of(MOCK_RECIPES);
    //return this._httpClient.get<Recipe[]>(`${this.SERVER_URL}`);
  }

  getRecipe(id: string): Observable<Recipe> {
    //return this._httpClient.get<Recipe>(`${ this.SERVER_URL }/${id}`);
    return of(MOCK_RECIPES[id]);
  }

}
