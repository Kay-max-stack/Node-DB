const express = require('express');
const router = express();
const mongoDbController = require('../controller/dbController');

//routen müßen noch angepasst werden. Delete sowie Detail ansicht gehen nicht mehr richtig aufgrund von sytels.css
router.get('/home', mongoDbController.displayAllEntries);
router.get('/home/:id', mongoDbController.displaySingleElementDetails);
router.post('/home', mongoDbController.createNewPost);
router.delete('/home/:id', mongoDbController.deletePost);
router.get('/about',mongoDbController.getAboutPage);
router.get('/create', mongoDbController.getCreatePage);
module.exports = router;