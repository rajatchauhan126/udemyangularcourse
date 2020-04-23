

import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from '../../shared/Ingredient.model';

const initialState = {
  ingredients :
 [
    // new Ingredient('Apples', 5),
    // new Ingredient('Tomatoes', 10),
  ]
}

export function ShoppingListReducer(state = initialState, action : ShoppingListActions.ADD_INGREDIENT) {
  switch(action.type) {
  case 'ADD_INGREDIENT' :
  return {
    ...state,
    ingredients : [...state.ingredients, action.payload],
  }
  default : 
  return state;
  }
}