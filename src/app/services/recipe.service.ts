import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  recipeSelected = new Subject<Recipe>();

  // private recipes:Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is the test description for the recipe','https://www.shutterstock.com/shutterstock/photos/370298699/display_1500/stock-photo-notepad-for-your-recipe-with-herbs-and-spices-over-black-stone-background-top-view-with-copy-space-370298699.jpg',[
  //     new Ingredient('meat',1),
  //     new Ingredient('french Fries',1)
  //   ]),
  //   new Recipe('Another Test Recipe', 'This is the dsgsdgbfs test description for the recipe','https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80',[
  //     new Ingredient('meat',2),
  //     new Ingredient('french Fries',1),
  //     new Ingredient('bun',1),
  //   ])
  // ];
  private recipes:Recipe[] = [];

  constructor(private slService:ShoppingListService) { }
  setRecipe(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  getRecipe(){
    return this.recipes.slice();
  }

  getRecipes(index:number){
    return this.recipes[index];
  }

  OnAddToShoppingList(ingredient:Ingredient[]){
    this.slService.addIngredientR(ingredient);
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
