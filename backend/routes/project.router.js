const express = require('express');
const projectController = require('../controllers/project.controllers');
const multer = require('multer');
const path = require('path');
const router = express.Router();


const imgStorage = multer.diskStorage({
    destination: './public/images',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});
const imgUpload = multer({ storage: imgStorage }).single('images');

router.post('/banner', imgUpload,imgUpload, projectController.bannerSet);

module.exports = router;