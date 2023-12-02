import { defineField, defineType } from "sanity";

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'fname',
            title: 'FirstName',
            type: 'string',
            description: 'name of the user ',
            
        }),
        defineField({
            name: 'lname',
            title: 'LastName',
            type: 'string',
            description: 'name of the user ',
            
        }),
        defineField({
            name: 'password',
            title: 'Password',
            type: 'string',
            description: 'password of the user ',
            
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            description: 'email of the user ',
            
        }),
        defineField({
            name: 'phoneNumber',
            title: 'PhoneNumber',
            type: 'number',
            description: 'num of the user ',
            
        }),
        defineField({
            name: 'courseSection',
            title: 'CourseSection',
            type: 'string',
            description: 'email of the user ',
            
        }),
        defineField({
            name: 'image',
            type: 'imageObject',
            title: 'Image',
        }),
        defineField({
            name: 'roles',
            title: 'Roles',
            type: 'boolean',
            description: 'if false or neither. => user is not admin.. else if true => user admin', 
        }),
        defineField({
            name: 'status',
            type: 'string',
            title: 'Account Status',
        }),
    ]
})