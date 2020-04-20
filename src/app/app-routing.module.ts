import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes = [
  { path: "", redirectTo: RecipesComponent, fullMatch: true },
  { path: "recipes", component: RecipesComponent },
  { path: "shopping-list", component: ShoppingListComponent }
];
