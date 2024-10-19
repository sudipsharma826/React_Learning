// Initialize express router
const router = require('express').Router();

//Multer Configuration
const {upload} = require('../config/multerConfig');

//Importing the product Controller
const { addProduct} = require('../controller/productController');

//Creating Routes
router.route('/addProduct').post(upload.single('productImage'),addProduct);



//Exporting the module
module.exports = router;

