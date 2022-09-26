import axios from 'axios';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_NAME = 'GET_RECIPES_NAME';
export const GET_DIETS = 'GET_DIETS';
export const ADD_NEW_RECIPE = 'ADD_NEW_RECIPE';
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL'; 
export const REMOVE_DIET = 'REMOVE_DIET';
export const FILTER_BY_DIET = 'FILTER_BY_DIET';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_HEALTH_SCORE = 'ORDER_BY_HEALTH_SCORE';

export function getRecipes(){
  return async function(dispatch){
    try { 
    var json = await axios.get(`http://localhost:3001/api/recipes/`);
      console.log('el json en actions', json)
      return dispatch({
          type : "GET_RECIPES",
          payload: json.data
      })
    } catch (error) {
           console.log(error);
      }
  }
}

export function getRecipesName(name) {
  return async function(dispatch) {
  try {
     var json = await axios.get("http://localhost:3001/api/recipes?name="+ name) 
    console.log('Action de GetRName', json)
    return dispatch({
      type: 'GET_RECIPES_NAME',
      payload: json.data
    }) 
  } catch (error) {
      alert("El nombre de la receta no fue encontrado.");
  }
  
  }
}

export function getDiets(){
  return async function(dispatch){
      var json = await axios.get(`http://localhost:3001/api/diets/`);
      //console.log('el json en actions', json)
      return dispatch({
          type : "GET_DIETS",
          payload: json.data
      })
  }
};


export function addNewRecipe(payload) {
  return async function(dispatch){
    var json = await axios.post(`http://localhost:3001/api/recipes`, payload);
    console.log('el json en actions', json)
    return json;
}
};


  export function getRecipeDetail(id) {
    return async function(dispatch){
      var json = await axios.get(`http://localhost:3001/api/recipes/${id}`);
      console.log('el json de ID en actions', json)
      return dispatch({
          type : "GET_RECIPE_DETAIL",
          payload: json.data
      })
  }
  };

export function filterRecipesByDiet(payload) {
  console.log('Actions', payload);
  return {
    type: 'FILTER_BY_DIET',
    payload
  }
};

export function orderByName(payload) {
 // console.log(payload);
  return {
    type: 'ORDER_BY_NAME',
    payload
  }
};

export function orderByHealthScore(payload) {
  console.log(payload);
  return {
    type: 'ORDER_BY_HEALTH_SCORE',
    payload
  }
};