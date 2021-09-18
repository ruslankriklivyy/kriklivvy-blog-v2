import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../layouts/Layout';
import Link from 'next/link';
import { GetStaticPaths } from 'next';
import PostItem from '../../components/Posts/PostItem';
import s from '../../components/Posts/posts.module.scss';
import { IPostResponse } from '../../interfaces/interfaces';

interface ICategoryTypeProps {
  category: string;
  posts: IPostResponse[];
  notes: IPostResponse[];
}

const CategoryType: React.FC<ICategoryTypeProps> = ({ category, posts, notes }) => {
  const filteredPosts = posts.filter((post) => post.frontmatter.categoryLink === category);
  const filteredNotes = notes.filter((post) => post.frontmatter.categoryLink === category);

  const data = [...filteredPosts, ...filteredNotes];

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

export async function getServerSideProps(context: any) {
  // const files = fs.readdirSync(path.join('posts'));
  const notesFiles = fs.readdirSync(path.join('notes'));
  const category = context.params.slug;

  // const posts = files.map((filename) => {
  //   const slug = filename.replace('.md', '');
  //   const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
  //   const { data: frontmatter } = matter(markdownWithMeta);

  //   return {
  //     slug,
  //     frontmatter,
  //   };
  // });

  const notes = notesFiles.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('notes', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: [],
      notes,
      category,
    },
  };
}
