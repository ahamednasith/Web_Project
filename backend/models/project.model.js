module.exports = (sequelize, DataTypes) => {
    const Template = sequelize.define('template', {
        templateId: {
            type: DataTypes.INTEGER
        },
        header: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING(1000)
        },
        button: {
            type: DataTypes.STRING
        },
        banner: {
            type: DataTypes.STRING
        },
        mainImage: {
            type: DataTypes.STRING
        },
        product: {
            type: DataTypes.JSON
        }
    }, {
        timestamps: false
    });
    return Template;
}