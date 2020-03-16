import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
