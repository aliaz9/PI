import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets } from '../../Actions/index.js';
import { addNewRecipe } from '../../Actions/index.js';


// function validate(input) {
//     let errors = {};
//     if(!input.title) {
//         errors.title = "Se requiere un title."
//     }
//     return errors;
// }


export default function RecipeCreator() {
    const diets = useSelector((state) => state.allDiets);
    const dispatch = useDispatch();

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

    function handleOnChange(e) {
        setInput({

            ...input,
            [e.target.name]: e.target.value,

        })
    }

    function handleSelect(e) {
        setInput({

            ...input,
            diets: [...input.diets, e.target.value]

        })

    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submiteado", input);
        dispatch(addNewRecipe(input))
        alert("Personaje Creado")
        setInput({
            title: "",
            summary: "",
            image: "",
            healthScore: "",
            steps: "",
            diets: [],
        });
    }


    function handleClose(d){
        setInput({
            ...input,
            diets: input.diets.filter(diet => diet !== d)
        })
    }

    // function handleClose(e) {
    //     setInput({

    //      ...input,
    //      diets: input.diets.filter((d) => d !== "Vegan") // no es igual a la receta que está junto a la X. 

    //     })
    //     e.preventDefault()
    //     console.log("entra en handleClose", e)

    // }
    
    return (
        <div>
            {/* <Link to='/home'><button>Volver</button></Link> AGREGAR ESTE BOTON*/} 
            <h1> Crea tu receta </h1>
            <form onSubmit={handleSubmit}>

                <label>Title</label>
                <input type="text" value={input.title} name="title" onChange={handleOnChange} />

                <label>Summary</label>
                <input type="text" value={input.summary} name="summary" onChange={handleOnChange} />

                <label>Image</label>
                <input type="text" value={input.image} name="image" onChange={handleOnChange} />

                <label>Health Score</label>
                <input type="number" value={input.healthScore} name="healthScore" onChange={handleOnChange} />

                <label>Steps</label>
                <input type="text" value={input.steps} name="steps" onChange={handleOnChange} />

                <select onChange={handleSelect}>
                    {
                        diets.map((d) => ( // Diets ya me lo traje con el useSelector
                            <option value={d.diet}>{d.diet}</option>
                        ))
                    }
                </select>

                {/* HACER UN HANDLE QUE LOS BORRE DEL ESTADO. */}
                <ul>
                    {input.diets.map(d =>
                        <div>
                            <li>{d}</li><button onClick={() => handleClose(d)} >X</button>
                        </div>
                    )
                    }
                </ul>

                <button type='Submit'>CREAR RECETA</button>

            </form>
        </div>
    )

}

// function onClose(id) {
//     setCities(oldCities => oldCities.filter(c => c.id !== id));
//   }