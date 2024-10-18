import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import GetNotified from '../components/GetNotified';

const EditProduct = () => {

  return (
    <>
    < NavBar />
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Edit Product</h2>
        <form >
          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
            //   value={productData.name}
            //   onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter product name"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Category</label>
            <input
              type="text"
              name="category"
            //   value={productData.category}
            //   onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter category"
            />
          </div>

          {/* Batch */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Brand</label>
            <input
              type="text"
              name="batch"
            //   value={productData.batch}
            //   onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter brand number"
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Price ($)</label>
            <input
              type="number"
              name="price"
            //   value={productData.price}
            //   onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter price"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Description</label>
            <textarea
              name="description"
            //   value={productData.description}
            //   onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter product description"
              rows="3"
            />
          </div>

          {/* Exisitng image url */}
          <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Current Product Image</label>
  <img 
    src="/images/profile.png" 
    alt="Current image" 
    className="max-w-xs w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  />
</div>


          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700">New Product Image</label>
            <input
              type="file"
              name="image"
            //   onChange={handleImageChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              accept="image/*"
            />
            {/* {productData.image && (
              <img
                src={URL.createObjectURL(productData.image)}
                alt="Preview"
                className="mt-4 h-32 w-full object-cover rounded-md shadow-md"
              />
            )} */}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
    < GetNotified />
    < Footer />
    </>
  );
};

export default EditProduct;
