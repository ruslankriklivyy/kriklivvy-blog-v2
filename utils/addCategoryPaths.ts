import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPaths } from '../interfaces/interfaces';

export const addCategoryPaths = (file: string[], paths: IPaths[], name: string) => {
  file.forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(name, filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    paths.push({
      params: {
        slug: frontmatter.categoryLink.replace('.md', ''),
      },
    });
  });
};
