import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'pasta ai broccoli',
      imageUrl: 'https://blog.giallozafferano.it/allacciateilgrembiule/wp-content/uploads/2016/12/pasta-con-i-broccoli.jpg',
      ingredients: ['pasta', 'cipolla', 'broccolo']
    },
    {
      id: '2',
      title: 'Torta nutella e banane',
      imageUrl: 'https://i.pinimg.com/736x/cf/48/88/cf488803b4bd58a3dba4ee051bca7a64.jpg',
      ingredients: ['farina', 'nutella', 'banane']
    },
    {
      id: '3',
      title: 'polpette vegane',
      imageUrl: 'https://www.melarossa.it/wp-content/uploads/2019/05/ricetta-polpette-vegetarane.jpg',
      ingredients: ['pane', 'broccolo', 'uovo']
    }
  ];

  constructor() { }

  getAllRecipes() {
    // ... is spread operator that creates a copy of the recipe list
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

}
