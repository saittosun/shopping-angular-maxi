import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  // we will define the type for this property and the title will be recipe
  private recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'this is first one',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('french fries', 20)
      ]),
      new Recipe(
        'an another recipe',
        'this is first one',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingredient('buns', 2),
          new Ingredient('meat', 1)
        ])
      ];
      constructor(private shoppingListService: ShoppingListService) { }
      
      getRecipes() {
        // tslint:disable-next-line:max-line-length
        // If I were to return it like this, I actually return the direct reference to this array and since arrays and objects are reference types in Javascript, so has nothing to do with Angular, vanilla Javascript that is, well if we now change something on this array, we will change it on the array in this service. Therefore, I will call slice with no arguments, this will simply return a new array which is an exact copy of the one in this service file. So therefore, we really can't access the recipes array stored here from outside,we only get a copy, so that is a way to get our recipe.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
