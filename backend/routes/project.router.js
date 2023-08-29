const express = require('express');
const projectController = require('../controllers/project.controllers');
const multer = require('multer');
const path = require('path');
const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'images') {
            cb(null, './public/images');
        } else if (file.fieldname === 'videos') {
            cb(null, './public/videos');
        } else {
            cb(new Error('Invalid fieldname'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '' + Date.now() + path.extname(file.originalname));
    }
});
const imgUpload = multer({ storage: storage }).array('images');
const vidUpload = multer({ storage: storage }).array('videos', 6);

router.post('/banner', imgUpload, projectController.bannerSet);
router.put('/product', vidUpload, projectController.productSet);
router.get('/template/:templateId', projectController.getBanner)

module.exports = router;