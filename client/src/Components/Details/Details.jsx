import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail } from '../../Actions/index.js';
import axios from 'axios';
// "7e52e276-d3a1-4397-8181-91f9ea61be69" para ejemplo.


     const RecipeDetail = (props) => {

     const dispatch = useDispatch()

        useEffect( () => {
        dispatch(getRecipeDetail(props.match.params.id))
        }, [])

        const recipe = useSelector(state => state.recipeDetail)

        console.log('La receta en el componente:', recipe)

    return (
        <div>
            {
                 recipe.length > 0 ?
                <div>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.summary}</p>
                    <p>{recipe.image}</p>
                    <p>{recipe.steps}</p>
                    <p>{recipe.diets}</p>
                    <p>{recipe.healthScore}</p>
                </div>
                  : <p>Loading</p>
            }
        </div>

    )
};


export default RecipeDetail;