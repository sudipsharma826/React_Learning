//Product Table
module.exports = (sequelize, DataTypes) => {
    const productTable= sequelize.define("productTable",{
        productName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        productCategory:{
            type: DataTypes.STRING,
            allowNull: false
        },
        productBrand:{
            type: DataTypes.STRING,
            allowNull: false
        },
        productPrice:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productDetails:{
            type: DataTypes.STRING,
            allowNull: false
        },
        productImage:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return productTable;
};