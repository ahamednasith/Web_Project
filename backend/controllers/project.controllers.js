const db = require('../models/index');
const { Sequelize,Op } =require('sequelize');
const path = require('path');
const Template = db.template;


const bannerSet = async (req, res) => {
    try {
        const templateId = Math.floor(100000 + Math.random() * 900000);
        const { header, description, button } = req.body;
        const banner =req.files[0].path;
        const mainImage = req.files[1].path;
        const product = req.files[2].map(file=>file.path);
        const template = await Template.create({
            templateId, header, description, button, banner,mainImage,product
        });

        return res.status(200).json({ message: 'Inserted' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error',error });
    }
};

const productSet = async (req,res) => {
    try {
        const templateId = req.body.templateId;
        const product = req.files.map(file=>file.path);
        const template = await Template.update({
            product
        },{where:{
            templateId
        }})
        return res.json({message:"updated"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error',error });
    }
}
module.exports ={ bannerSet, productSet }