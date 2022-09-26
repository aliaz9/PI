const { Router } = require('express');
const recipesRoutes = require('./recipes');
const typesRoutes = require('./types');

const router = Router();

router.use('/recipes', recipesRoutes);
router.use('/diets', typesRoutes);

module.exports = router;
