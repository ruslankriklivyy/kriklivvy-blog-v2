import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPostResponse } from '../interfaces/interfaces';

export const getData = (name: string): IPostResponse[] => {
  const files = fs.readdirSync(path.join(name));

  const data = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join(name, filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  // @ts-ignore
  return data.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
};
