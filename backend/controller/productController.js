const { productTables } = require('../model/index');
const fs = require('fs');
const path = require('path');

// Adding a new product with image handling
exports.addProduct = async (req, res) => {
    try {
        const productImage = req.file.filename;
        const { productName, productCategory, productBrand, productPrice, productDetails } = req.body;

        const product = await productTables.create({
            productName,
            productCategory,
            productBrand,
            productPrice,
            productDetails,
            productImage
        });

        console.log("Product has been added successfully");
        res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
        console.error("Error while adding the product", error);
        res.status(500).json({ message: "Server error while adding the product" });
    }
};

// Updating an existing product with image handling
exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { productName, productCategory, productBrand, productPrice, productDetails } = req.body;
        const updateData = { productName, productCategory, productBrand, productPrice, productDetails };

        // Check if there is a new image file uploaded
        if (req.file) {
            const productImage = req.file.filename;

            // Find the existing product to delete the old image if necessary
            const oldData = await productTables.findOne({ where: { id } });
            if (!oldData) {
                return res.status(404).json({ message: "Product not found" });
            }

            // Delete the old image from the file system
            if (oldData.productImage) {
                const oldImagePath = path.join(__dirname, '..', 'public', 'images', oldData.productImage);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            updateData.productImage = productImage;
        } else {
            // Retain the old image if no new image is uploaded
            const oldData = await productTables.findOne({ where: { id } });
            if (!oldData) {
                return res.status(404).json({ message: "Product not found" });
            }
            updateData.productImage = oldData.productImage;
        }

        // Update the product
        const updatedProduct = await productTables.update(updateData, { where: { id } });

        console.log("Product has been updated successfully");
        res.status(200).json({ message: "Product updated successfully", updatedProduct });
    } catch (error) {
        console.error("Error while updating the product", error);
        res.status(500).json({ message: "Server error while updating the product" });
    }
};

// Fetching a single product or all products
exports.getProducts = async (req, res) => {
    try {
        const id = req.params.id;

        let products;
        if (id) {
            products = await productTables.findOne({ where: { id } });
            if (!products) {
                return res.status(404).json({ message: "Product not found" });
            }
        } else {
            products = await productTables.findAll(); // Fetch all products if no ID is provided
        }

        res.status(200).json(products);
    } catch (error) {
        console.error("Error while fetching the products", error);
        res.status(500).json({ message: "Server error while fetching the products" });
    }
};

// Deleting a product and its associated image
exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await productTables.findOne({ where: { id } });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Deleting the product image from the file system
        if (product.productImage) {
            const productImagePath =`public/images/${product.productImage}`;
            if (fs.existsSync(productImagePath)) {
                fs.unlinkSync(productImagePath);
            }
        }

        // Delete the product from the database
        await productTables.destroy({ where: { id } });

        console.log("Product has been deleted successfully");
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error while deleting the product", error);
        res.status(500).json({ message: "Server error while deleting the product" });
    }
};
