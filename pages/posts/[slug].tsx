import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import React from 'react';
import { IPost } from '../../interfaces/interfaces';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import s from './post.module.scss';
import Layout from '../../layouts/Layout';
import { NextPage } from 'next';

interface IPostProps {
  frontmatter: IPost;
  slug: string;
  content: any;
}

const Post: NextPage<IPostProps> = ({ frontmatter, slug, content }: any) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout name={frontmatter.title}>
      <div className={s.post}>
        <h2>{frontmatter.title}</h2>
        <div className={s.postInfo}>
          <a href={`/category/${frontmatter.categoryLink}`} className={s.postCategory}>
            <span style={{ backgroundColor: `#${frontmatter.categoryColor}` }}></span>
            <p>{frontmatter.category}</p>
          </a>
          <div className={s.postDate}>
            <p>Дата: {frontmatter.date}</p>
          </div>
        </div>
        <div className={s.postContent} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
