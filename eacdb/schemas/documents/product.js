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
            validation: rule=> [
                rule.required().warning('this is important')],
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'price of the product',
            validation: rule=> [
                rule.required().warning('this is important')],
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'category of the product',
            validation: rule=> [
                rule.required().warning('this is important')],
        }),
    ]
})