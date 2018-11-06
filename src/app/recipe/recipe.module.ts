import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './routed/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './routed/recipe-detail/recipe-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeOverviewComponent } from './routed/recipe-overview/recipe-overview.component';
import { RouterModule } from '@angular/router';
import { RecipeAddComponent } from './routed/recipe-add/recipe-add.component';
import { FormsModule } from '@angular/forms';
import { RecipeUpdateComponent } from './routed/recipe-update/recipe-update.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeOverviewComponent,
    RecipeAddComponent,
    RecipeUpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecipeModule { }
