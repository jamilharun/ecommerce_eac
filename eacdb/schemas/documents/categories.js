import { defineField, defineType } from "sanity";

export default defineType({
    name: 'categories',
    title: 'categories',
    type: 'document',
    fields: [
        defineField({
            name: 'categoryname',
            title: 'Category Name',
            type: 'string',

        }),

        defineField({
            name: 'image',
            type: 'imageObject',
            title: 'Image',
        }),

        defineField({
            name: 'description',
            title: 'description',
            type: 'string',

        }),

       
       
    ]
})