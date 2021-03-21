const HttpException = require('../utils/HttpException.utils');
const sequelize = require('../db/db.config').sequelize;
var initModels = require("../models/init-models");

var model = initModels(sequelize)

class VilleController {
  get_villes = async (req, res) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    const { page, departement, sort } = req.query;

    var sort_order = sort ? get_sort_methode(sort): null
    var condition = departement ? { ville_departement: departement}  : null;
    var order = sort_order ? [ ['ville_nom_reel', sort] ] : null;

    const { limit, offset } = get_pagination(page);

    model.villes_france_free.findAndCountAll({
        attributes: ['ville_id', 'ville_departement', 'ville_nom_reel', 'ville_code_postal'],
        where: condition,
        order: order,
        limit,
        offset })
      .then(data => {

        const response = get_response(data, page, limit);
        res.send(response);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving villes."
        });
    });
  };

  get_ville_by_id = async (req, res) => {
    model.villes_france_free.findByPk( req.params.id )
    .then(data => {

      const response = {ville : data};
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving villes."
      });
    })
};


}

const get_pagination = (page) => {
  const limit =  500;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const get_sort_methode = (sort) => {
  if(sort.toUpperCase() == 'ASC') return 'ASC'
  else if(sort.toUpperCase() == 'DESC') return 'DESC'
  else return null
};

const get_response = (data, page, limit) => {
  const { count: totalItems, rows: villes } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, villes, totalPages, currentPage };
};


module.exports = new VilleController;