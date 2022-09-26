const { Router } = require('express');
const router = Router();
const { Type } = require('./../db')
const { getDiets } = require('../controllers/types');


router.get("/", async (req, res, next) => {
 
const allDiets = await getDiets(); 
res.json(allDiets);
console.log(allDiets);

//res.send("ruta dietas");
});


module.exports = router;