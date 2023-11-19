import { defineField, defineType } from "sanity";

export default defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        defineField({
            name: 'customer',   //users
            title: 'Customer',  // yung bibili 
            type: 'reference',
            to: [{
                title: 'User',
                type: 'user'
            }],
            validation: rule=> rule.required()
        }),
        defineField({
            name: 'product',
            title: 'Product',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'product'}]
            }],
            validation: rule=> rule.required()
        }),
        defineField({
            name: 'quantity',
            title: 'Quantity',
            type: 'array',
            of: [{
                type: 'number',
                
            }],
        }),
        defineField({
            name: 'Totalprice', //price
            title: 'TotalPrice',
            type: 'number',
        }),
    ]
})