import { RecipeService } from './../../../shared/recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @input allows us to bind this component property from outside
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    // tslint:disable-next-line:max-line-length
    // we can use this recipe selected event emitter and call emit and emit the recipe of this recipe item component because that is the one we selected and that's the data we want to pass. Now with this trick or with this approach, we can go to the recipe list component and remove this listener where we listened to whether we did select it or not, we can get rid of the onRecipeSelected code and get rid of our own emitted event here, so we're already saving a lot of code,
    this.recipeService.recipeSelected.emit(this.recipe);
  }


}
