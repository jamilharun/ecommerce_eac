import { defineField, defineType } from "sanity";

export default defineType({
    name: 'cart',
    title: 'Cart',
    type: 'document',
    fields: [
        defineField({
            name: 'saveBy',
            title: 'Save by',
            type: 'reference',
            to: [{
                title: 'User',
                type: 'user'
            }],
            description: 'this will reference the user who save the item'
        }),
        defineField({
            name: 'productSaved',
            title: 'Product saved',
            type: 'reference',
            to: [{
                title: 'Product',
                type: 'product'
            }]
        }),
        defineField({
            name: 'quantity',
            title: 'Quantity',
            type: 'number'
        }),
        defineField({
            name: 'total',
            title: 'Total',
            type: 'number'
        }),
        
    ]
})