const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo, QUE CREA EL MODELO, PERO DESDE DB PORQUE ESTA CONECTADO CON SEQUELIZE.
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {
    diet: {
      type: DataTypes.ENUM('dairy free', 'gluten free', 'ketogenic', 'vegetarian', 'lacto ovo vegetarian', 'vegan', 'pescetarian', 'paleolithic', 'primal', 'whole 30')
    },
  }, {
    timestamps: false
  });
};

