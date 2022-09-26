import { GET_RECIPES, GET_RECIPES_NAME, GET_DIETS, GET_RECIPE_DETAIL, ADD_NEW_RECIPE, FILTER_BY_DIET, ORDER_BY_NAME, ORDER_BY_HEALTH_SCORE } from "../Actions";

const initialState = {
  recipes: [],
  recipeDetail: [],
  allDiets: [],
  allRecipes: [],
};

export default function reducer(state = initialState, action) {

  if (action.type === GET_RECIPES) {
    console.log('ENTRA', action.payload)
    return {
      ...state,
      recipes: action.payload,
      allRecipes: action.payload,
    }
  }

  if (action.type === GET_RECIPES_NAME) { 
    //console.log('ENTRA', action.payload)
        return {
          ...state,
          recipes: action.payload,
        }
    }

  if (action.type === GET_DIETS) {
    //console.log('ENTRA', action.payload)
    return {
      ...state,
      allDiets: action.payload,
    }
  }
  if (action.type === GET_RECIPE_DETAIL) {
    console.log('ENTRA', action.payload)
    return {
      ...state,
      recipeDetail: action.payload,
    }
  }

  if (action.type === ADD_NEW_RECIPE) {
    //console.log('ENTRA', action.payload)
    return {
      ...state,
    }
  }

  if (action.type === FILTER_BY_DIET) {
    //console.log('ENTRA', action.payload)
    
    const all = state.allRecipes;
    
    const dietFiltered = action.payload !== "All"? all.filter(r => r.diets.includes(action.payload)) : all;  

    console.log("Recetas en Reducer", dietFiltered);
    return {
      ...state,
      recipes: dietFiltered
    }
  }

  if (action.type === ORDER_BY_NAME) {
    //console.log('ENTRA', action.payload)
    let sortedArr = action.payload === 'asc' ? // Veo si tiene el value de ascendente.
      state.recipes.sort(function (a, b) {
        if (a.title > b.title) { return 1 }
        if (b.title > a.title) { return -1 }
        return 0;
      }) :
      state.recipes.sort(function (a, b) {
        if (a.title < b.title) { return 1 }
        if (b.title < a.title) { return -1 }
        return 0;
      }) 
    return {
      ...state,
      recipes: sortedArr
    }
  }

  if (action.type === ORDER_BY_HEALTH_SCORE) {
    //console.log('ENTRA', action.payload)
    let sortedArr = action.payload === 'asc' ? // Veo si tiene el value de ascendente.
      state.recipes.sort(function (a, b) {
        if (a.healthScore > b.healthScore) { return 1 }
        if (b.healthScore > a.healthScore) { return -1 }
        return 0;
      }) :
      state.recipes.sort(function (a, b) {
        if (a.healthScore < b.healthScore) { return 1 }
        if (b.healthScore < a.healthScore) { return -1 }
        return 0;
      }) 
    return {
      ...state,
      recipes: sortedArr
    }
  }


   return state;
 }


// export default function reducer(state = initialState, action) {
//   switch (action.type) {
    
//     case GET_RECIPES:
//     console.log('ENTRA', action.payload)
//        return {
//          ...state,
//          recipes: action.payload,
//        };

//     //   case GET_RECIPE_DETAIL:
//     //   return {
//     //     ...state,
//     //     posts: action.payload,
//     //   };
//     //   case ADD_NEW_RECIPE:
//     //   return {
//     //     ...state,
//     //     userPosts: action.payload,
//     //   };
//     //   case GET_DIETS:
//     //   return {
//     //     ...state,
//     //     allDiets: action.payload,
//     //   };

//     default:
//       return state;
//   }
// }