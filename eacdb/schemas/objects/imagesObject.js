export default {
    name: 'imageObject',
    type: 'image',
    title: 'image',
    options: {
      hotspot: true
    },
    fields: [
      {
        name: 'caption',
        type: 'string',
        title: 'caption',
        options: {
          isHighlighted: true,
        },
      },
      {
        name: 'altText',
        type: 'string',
        title: 'alttext',
        options: {
          isHighlighted: true
        },
      }
    ]
  }