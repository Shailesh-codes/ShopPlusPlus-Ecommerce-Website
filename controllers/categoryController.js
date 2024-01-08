import CategoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(401).send({ message: "Name is required" })
        }
        const existingCategory = await CategoryModel.findOne({ name })
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: 'Category Already Exists'
            })
        }
        const category = await CategoryModel({ name, slug: slugify(name) }).save()
        res.status(201).send({
            success: true,
            message: 'new category created',
            category
        })


    } catch (error) {

        res.status(500).send({
            success: false,
            error,
            message: 'Errro in Category'
        });

    }
};

// Update CategoryController
export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body
        const { id } = req.params
        const category = await CategoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true }
        );
        res.status(200).send({
            success: true,
            message: 'Category Updated Successfully',
            category,
        });

    } catch (error) {

        res.status(500).send({
            success: false,
            error,
            message: 'Error while updating category'
        })

    }
};

// Get All Categories 
export const categoryController = async (req, res) => {
    try {
        const category = await CategoryModel.find({});
        res.status(200).send({
            success: true,
            message: "All Categories List",
            category,
        });
    } catch (error) {
        ;
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting all categories",
        });
    }
};

// Single Category 
export const singleCategoryController = async (req, res) => {
    try {
        const category = await CategoryModel.findOne({ slug: req.params.slug })
        res.status(200).send({
            success: true,
            message: "Get Single Category Successfully",
            category
        })

    } catch (error) {

        res.status(500).send({
            success: false,
            error,
            message: "Error while getting single Category"
        })

    }
};

// Delete Category 

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await CategoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Category Deleted Successfully"
        });

    } catch (error) {

        res.status(500).send({
            success: false,
            message: "Error while deleting Category",
            error,
        });

    }
};