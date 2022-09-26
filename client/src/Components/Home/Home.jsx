import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, filterRecipesByDiet, orderByHealthScore, orderByName } from '../../Actions/index';
import { getDiets } from '../../Actions/index';
import { RecipeCard } from '../Card/Card';
import Nav from './../Nav/Nav'
import './Home.css';
import Paginado from '../Paginado/Paginado';

export default function Home() {
    let recipes = useSelector((state) => state.recipes)
    const diets = useSelector((state) => state.allDiets);
    let dispatch = useDispatch();

    const [input, setInput] = useState({
        title: "",
        summary: "",
        image: "",
        healthScore: "",
        steps: "",
        diets: [],
    });

    useEffect(() => { 
        dispatch(getDiets());
    }, []);


function handleFilterDiet (e) {

dispatch(filterRecipesByDiet(e.target.value))

}



    //////////PAGINADO
    // Crear un estado que setee la página actual.
    const [currentPage, setCurrentPage] = useState(1); // 1 porque siempre empezamos de la página 1.
    const [recipesPerPage, setRecipesPerPage] = useState(6); // Cuantas cards por página.
    const indexOfLastRecipe = currentPage * recipesPerPage; // En un principio es 9
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; // 0
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) // Esto lo traigo del useSelector.

// 1-----0------9
// 2----10------20

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
//////////////

const [order, setOrden] = useState('')

function handleSortName (e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
 //   setCurrentPage(1),
    setOrden(`Ordenado ${e.target.value}`) // Me modifica el estado local y se renderiza??
    };

    function handleSortHealthScore (e) {
        e.preventDefault();
        dispatch(orderByHealthScore(e.target.value))
     //   setCurrentPage(1),
        setOrden(`Ordenado ${e.target.value}`) // Me modifica el estado local y se renderiza??
        };

    useEffect(() => {
    dispatch(getRecipes())
    }, [])
    
//console.log("Entra en Home", recipes)
    return (
        <div>
            <Nav />
            <select onChange={(e) => handleFilterDiet(e)}>
                   <option value="All">All</option>
                {
                    diets.map((d) => ( // Diets ya me lo traje con el useSelector
                        <option value={d.diet}>{d.diet}</option>
                    ))
                }
            </select>

            <select onChange={(e) => handleSortName(e)}> 
                <option value="name">Order By Name</option>
                <option value="asc">Ascendente</option>
                <option value="des">Descendente</option>
            </select>

            <select onChange={(e) => handleSortHealthScore(e)}> 
                <option value="name">Order By HealthScore</option>
                <option value="asc">Ascendente</option>
                <option value="des">Descendente</option>
            </select>

            <Paginado recipesPerPage={recipesPerPage} recipes={recipes.length} paginado={paginado} />

            {currentRecipes.map(r => {
                return <RecipeCard title={r.title} id={r.id} image={r.image} diets={r.diets} healthScore={r.healthScore}/>
            })}
        </div>

    )
}