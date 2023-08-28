const db = require('../models/index');
const { Sequelize,Op } =require('sequelize');
const path = require('path');
const Template = db.template;


const bannerSet = async (req, res) => {
    try {
        const templateId = Math.floor(100000 + Math.random() * 900000);
        const { header, description, button } = req.body;
        const banner = req.file.path;
        const mainImage = req.file.path;
        const template = await Template.create({
            templateId, header, description, button, banner,mainImage
        });

        return res.status(200).json({ message: 'Inserted' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports ={ bannerSet }