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
            name: 'checkout',
            title: 'Checkout',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'cart'}]
            }],
        }),
        defineField({
            name: 'totalPrice',
            title: 'totalPrice',
            type: 'number',
            
        }),
        defineField({
            name: 'paymentAmount',
            title: 'Payment_Amount',
            type: 'number',
        }),
    ]
})