import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'hero',
          label: 'Hero',
          interfaceName: 'hero',
          localized: true,
          fields: [
            {
              type: 'group',
              name: 'group',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
  ],
}
