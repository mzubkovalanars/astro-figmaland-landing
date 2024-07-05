import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'Brand and General Characteristics',
    },
    {
      name: 'technical',
      title: 'Technical Specifications',
    },
    {
      name: 'physical',
      title: 'Physical Attributes',
    },
    {
      name: 'performance',
      title: 'Performance and Usage',
    },
    {
      name: 'features',
      title: 'Additional Features',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'general',
      validation: (rule) => rule.required().error('Required field'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'general',
      options: {
        source: 'name',
        maxLength: 100,
      },
      hidden: ({ document }) => !document?.name,
      validation: (rule) => rule.required().error('Required field'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      group: 'general',
      validation: (rule) => rule.required().error('Required field'),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      group: 'general',
      validation: (rule) => rule.required().error('Required field'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      group: 'general',
      validation: (rule) => rule.required().error('Required field'),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      group: 'general',
      validation: (rule) => rule.required().error('Required field'),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
      group: 'general',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'general',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption', //* For alts on the client
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
    {
      name: 'tech_specs',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'connectivity', title: 'Connectivity', type: 'string' },
        { name: 'wireless', title: 'Wireless', type: 'boolean' },
        { name: 'compatibility', title: 'Compatibility', type: 'string' },
        { name: 'resolution', title: 'Resolution', type: 'string' },
        { name: 'sensor', title: 'Sensor', type: 'string' },
        { name: 'storage', title: 'Storage', type: 'string' },
        { name: 'storage_capacity', title: 'Storage Capacity', type: 'string' },
        { name: 'ram', title: 'RAM', type: 'string' },
      ],
      group: 'technical',
    },
    {
      name: 'physical_specs',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'weight', title: 'Weight', type: 'string' },
        { name: 'material', title: 'Material', type: 'string' },
        { name: 'thickness', title: 'Thickness', type: 'string' },
        { name: 'adjustable_height', title: 'adjustable_height', type: 'boolean' },
        { name: 'adjustable_length', title: 'Adjustable Length', type: 'boolean' },
        { name: 'screen_size', title: 'Screen Size', type: 'string' },
      ],
      group: 'physical',
    },
    {
      name: 'performance_specs',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'battery_life', title: 'Battery Life', type: 'string' },
        { name: 'power', title: 'Power', type: 'string' },
        { name: 'output_power', title: 'Output Power', type: 'string' },
        { name: 'suction_power', title: 'Suction Power', type: 'string' },
        { name: 'range', title: 'Range', type: 'string' },
      ],
      group: 'performance',
    },
    {
      name: 'features_specs',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'waterproof', title: 'Waterproof', type: 'boolean' },
        { name: 'voice_control', title: 'Voice Control', type: 'boolean' },
        { name: 'foldable', title: 'Foldable', type: 'boolean' },
        { name: 'heart_rate_monitor', title: 'Heart Rate Monitor', type: 'boolean' },
        { name: 'wireless_charging_standard', title: 'Wireless Charging Standard', type: 'string' },
      ],
      group: 'features',
    },
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
});
