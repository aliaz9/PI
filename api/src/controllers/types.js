const{ Recipe,Type } = require('../db')


let diets = [
	{ diet: 'gluten free' },
	{ diet: 'ketogenic' },
    { diet: 'vegetarian' },
    { diet: 'lacto ovo vegetarian' },
    { diet: 'vegan' },
    { diet: 'pescetarian' },
    { diet: 'paleolithic' },
    { diet: 'primal' },
	{ diet: 'dairy free'},
    { diet: 'whole 30' }
];


async function getDiets (req, res, next) {
	
	const hay = await Type.findAll();

	if(hay.length > 0) {
	console.log("Las dietas ya estaban en la base", hay)
	return hay; 
	//return "Las dietas estaban creadas";
    
    } else {
	const creadas = await Type.bulkCreate(diets);
	//console.log("Estaba vacía, las tiene que crear ahora", creadas)
	return creadas;
    }
	
}



module.exports = {
	getDiets,
};