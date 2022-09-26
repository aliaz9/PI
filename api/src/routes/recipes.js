const { Router } = require('express');
const router = Router();
const { Recipe, Type } = require('./../db')
const axios = require('axios');
const { getApiInfo, getDBInfo, getAllRecipes, getApiRecipeById } = require('../controllers/recipes');



router.get("/", async (req, res, next) => {
const { name } = req.query;

const allRecipes = await getAllRecipes(); 
//const byName = allRecipes.filter(r => name.toLowerCase() === r.title.toLowerCase())
if(name) {
const byName = allRecipes.filter(r => r.title.toLowerCase().includes(name.toLowerCase()))
//console.log(name);
//console.log(allRecipes)
byName.length?
res.json(byName):
res.status(404).send('No se han encontrado recetas con ese nombre.')

} else {
res.json(allRecipes);
}

});


router.post('/', async (req, res, next) => {
    const { title, summary, image, healthScore, steps, diets } = req.body; 

    try {
        const newRecipe = await Recipe.create({
            title,
            summary,
            image,
            healthScore,
            steps,
            //diets,
        })

        // Diets se relaciona aparte.
        // Ver si encuentra las ocupaciones en el modelo que le paso por body.
        let dietDB = await Type.findAll({
            where: {diet: diets}
        });

        // let dietDB = await Type.findAll();

        newRecipe.addType(dietDB); //// Agrega las diets.

        res.send(newRecipe);
        
    } catch (error) {
     next(error)
    }

});


    
    router.get('/:id', async (req, res) => {
        const { id } = req.params; 

    if(id.length > 10) {
        const recipesDB = await getDBInfo(); 
        const idDB = recipesDB.filter( r => id === r.id )
        res.send(idDB) // Busca en base de datos.
    } else {
        try {
        


        const idApi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=a15e8a8a71f54c48b4300f8c81007f83`);
        const idApiData = {
            title: idApi.data.title,
            summary: idApi.data.summary,
            image: idApi.data.image,
        }
//        console.log(idApi.title)
  //      res.json(idApi.data)
        
        res.json(idApiData)
        //   https://api.spoonacular.com/recipes/716426/information?apiKey=a15e8a8a71f54c48b4300f8c81007f83 LINK CORRECTO
        
        // const recipesApi = await getApiInfo();
        // //console.log(recipesApi)
        // const idApi = await recipesApi.find( r => id == r.id )
        //res.json(idApi) // Busca en API.    
        
        } catch (error) {
        console.log(error);
        }

    }

    //res.status(404).send("No se encontró la receta.")

});



module.exports = router;