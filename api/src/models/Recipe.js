const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo, QUE CREA EL MODELO, PERO DESDE DB PORQUE ESTA CONECTADO CON SEQUELIZE.
// Luego le injectamos la conexion a sequelize.
const { Recipe } = require('../db')


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID, // REVISAR o va interger, 
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING, 
    },
    healthScore: {
      type: DataTypes.INTEGER, 
    },
    steps: { 
      type: DataTypes.TEXT,
    },
    // score: {
    //   type: DataTypes.INTEGER,
    // },
    // createdInDb:{                                  // esta propiedad la van a tenr solo las comidas que esten en la BD
    //   type : DataTypes.BOOLEAN,                    // por lo que es mas facil buscarlas 
    //   allowNull: false,
    //   defaultValue: true
    // }
  });
};

// id
// title
// sumary
// healthScore
//

// image
// diet???