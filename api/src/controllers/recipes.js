const axios= require('axios');
const{ Recipe,Type } = require('../db')
const {Sequelize} = require('sequelize');
const {
    API_KEY,
  } = process.env;

//PRUEBA GET CON LA API
const getApiInfo = async () => {
	try {
		const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=3`);
        // const response = await axios.get(`http://localhost:3001/api/foodCom.json`);
		//console.log(response.data.results);
        
        const api = response.data.results.map( r => { 
            return  {
                        title: r.title,
                        id: r.id,
                        image: r.image,
                        summary: r.summary,
                        healthScore: r.healthScore,
                        steps: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps?r.analyzedInstructions[0].steps.map(s=>s.step).join(" \n"):''),
                        diets: r.diets.map( r => r)
                    }
                }
               )
               return api; 
	}
	catch (error) {
		console.log(error);
	}
};


const getDBInfo = async () => {

    try {
        const data =  await Recipe.findAll({ 
            include:{
                model: Type,
                attributes: ['diet'],
                through:{
                    attributes: []
                }
            }
        })
    
        let dataDB = await data?.map(r => {
            return {
                id: r.id,
                title: r.title,
                summary: r.summary,
                healthScore: r.healthScore,
                image: r.image,
                steps: r.steps,
                diets: r.Types?.map(d => d.diet),
            }
        });
        return dataDB;
    
    } catch (error) {
        (error)
    }
    }

const getAllRecipes = async () => {

    const db = await getDBInfo(); 
    const api = await getApiInfo();
    const allRecipes = api.concat(db);  
    return allRecipes;
    //return db;
}

const getApiRecipeById = async () => {
    const { id } = req.params; 

    const idApi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=a15e8a8a71f54c48b4300f8c81007f83`);
    const idApiData = {
        title: idApi.data.title,
        summary: idApi.data.summary,
        image: idApi.data.image,
    }
//        console.log(idApi.title)
//      res.json(idApi.data)
    
    return idApiData;
    //   https://api.spoonacular.com/recipes/716426/information?apiKey=a15e8a8a71f54c48b4300f8c81007f83 LINK CORRECTO
    
    // const recipesApi = await getApiInfo();
    // //console.log(recipesApi)
    // const idApi = await recipesApi.find( r => id == r.id )
    //res.json(idApi) // Busca en API.  
}


module.exports= {
    getAllRecipes,
    getDBInfo,
    getApiInfo, 
    getApiRecipeById,
}