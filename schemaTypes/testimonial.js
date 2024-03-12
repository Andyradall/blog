import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'userName',
      title: 'User Name',
      type: 'string',
    }),
    defineField({
      name: 'userImage',
      title: 'User Image',
      type: 'image',
    }),
    defineField({
      name: 'workPlace',
      title: 'Place of Work',
      type: 'string',
    }),
    defineField({
      name: 'testimonialText',
      title: 'Testimonial Text',
      type: 'text',
    }),
  ],
});
