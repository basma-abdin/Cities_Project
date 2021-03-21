let express = require('express');
let router = express.Router();

const VilleController = require('../controllers/villes.controller');

router.get('/',VilleController.get_villes);
router.get('/:id',VilleController.get_ville_by_id);

module.exports = router;