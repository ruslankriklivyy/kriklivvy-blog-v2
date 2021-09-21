import React from 'react';
import Layout from '../../layouts/Layout';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import s from '../../components/Posts/posts.module.scss';
import PostItem from '../../components/Posts/PostItem';

const Category: any = ({ data }) => {
  return (
    <Layout name="Category">
      <div className={s.categories}>
        {data.length !== 0 &&
          data.map(({ slug, frontmatter }) => (
            <Link
              href={frontmatter.type === 'post' ? `/posts/${slug}` : `/notes/${slug}`}
              key={frontmatter.id}>
              <a>
                <PostItem {...frontmatter} />
              </a>
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export default Category;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const files = fs.readdirSync(path.join('posts'));
  const notesFiles = fs.readdirSync(path.join('notes'));
  // const category = ctx.params?.slug;
  const category = 'anime';

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  const notes = notesFiles.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('notes', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  const data = [...posts, ...notes].filter((item) => item.frontmatter.categoryLink === category);

  return {
    props: {
      data,
    },
  };
};
