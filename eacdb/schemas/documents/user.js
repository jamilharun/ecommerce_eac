import { defineField, defineType } from "sanity";

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'sub',
            title: 'Sub',
            type: 'string',
            description: [('sub will be use as foreign key in out system so it is as important ' +
            'why is there user_id when you fetch data from Vision you may ask? ' + 
            'because user_id is automatically generated once a data is send to Sanity database to store')],
            validation: rule=> [
                rule.required().warning('this is important')],
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'name of the user from auth0',
            validation: rule=> [
                rule.required().warning('this is important')],
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            description: 'email of the user from auth0',
            validation: rule=> [
                rule.required().warning('this is important')],
        }),
        defineField({
            name: 'roles',
            title: 'Roles',
            type: 'boolean',
            description: 'if false or neither. => user is not admin.. else if true => user admin',
            validation: rule=> [
                rule.required().warning('this is important')],
        }),
    ]
})