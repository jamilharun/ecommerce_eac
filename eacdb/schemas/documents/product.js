import { defineField, defineType } from "sanity";

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'name of the product',
            
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'price of the product',
            
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'description of the product',
            
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'category of the product',
            
        }),
        defineField({
            name: 'image',
            type: 'imageObject',
            title: 'Image',
        }),
    ]
})