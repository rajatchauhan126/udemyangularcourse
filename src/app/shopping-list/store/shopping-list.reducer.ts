

import { Ingredient } from './../../shared/Ingredient.model';
import * as ShoppingListAction from './shopping-list.actions';

const initialState = {
  ingredients :
 [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
}

export function ShoppingListReducer(state = initialState, action : ShoppingListAction.ADD_INGREDIENT) {
  switch(action.type) {
  case 'ADD_INGREDIENT' :
  return {
    ...state,
    ingredients : [...state.ingredients, action.payload]
  }
  }
}