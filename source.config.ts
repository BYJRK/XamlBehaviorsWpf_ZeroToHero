import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema.extend({
      source: z.string().url().optional(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
