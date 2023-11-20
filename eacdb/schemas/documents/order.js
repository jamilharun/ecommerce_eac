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
            description: 'yung bibili',
        }),
        defineField({
            name: 'product',
            title: 'Product',
            type: 'reference',
            to: [{ type: 'product'}],
        }),
        defineField({
            name: 'quantity',
            title: 'Quantity',
            type: 'number',
            
        }),
        defineField({
            name: 'paymentAmount', //price
            title: 'Payment_Amount',
            type: 'number',
        }),
    ]
})