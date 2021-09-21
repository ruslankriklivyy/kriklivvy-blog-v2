import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../layouts/Layout';
import Link from 'next/link';
import PostItem from '../../components/Posts/PostItem';
import s from '../../components/Posts/posts.module.scss';
import { IPostResponse } from '../../interfaces/interfaces';
import { GetStaticProps, GetStaticPaths } from 'next';

interface ICategoryTypeProps {
  category: string;
  data: IPostResponse[];
}

interface IPaths {
  params: { slug: string };
}

const CategoryType: React.FC<ICategoryTypeProps> = ({ data }) => {
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

export default CategoryType;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const filesPosts = fs.readdirSync(path.join('posts'));
  const filesNotes = fs.readdirSync(path.join('notes'));
  let paths: IPaths[] = [];

  [...filesPosts].forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    paths.push({
      params: {
        slug: frontmatter.categoryLink.replace('.md', ''),
      },
    });
  });

  [...filesNotes].forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('notes', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    paths.push({
      params: {
        slug: frontmatter.categoryLink.replace('.md', ''),
      },
    });
  });

  return {
    paths: [...paths],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const files = fs.readdirSync(path.join('posts'));
  const notesFiles = fs.readdirSync(path.join('notes'));
  const category = ctx.params?.slug;

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

  const data = category
    ? [...posts, ...notes].filter((item) => item.frontmatter.categoryLink === category)
    : {};

  return {
    props: {
      data,
    },
  };
};
