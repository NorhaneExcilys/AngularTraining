import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe/routed/recipe-list/recipe-list.component';
import { RecipeOverviewComponent } from './recipe/routed/recipe-overview/recipe-overview.component';
import { RecipeAddComponent } from './recipe/routed/recipe-add/recipe-add.component';
import { RecipeUpdateComponent } from './recipe/routed/recipe-update/recipe-update.component';

const routes: Routes = [{
  path: 'recipes',
  component: RecipeListComponent
},
{
  path: 'recipes/add',
  component: RecipeAddComponent
},
{
  path: 'recipes/update/:id',
  component: RecipeUpdateComponent
},
{
  path: 'recipes/:id',
  component: RecipeOverviewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
