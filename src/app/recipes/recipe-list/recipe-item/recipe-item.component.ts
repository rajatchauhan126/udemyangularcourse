import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.router.navigate('')
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
