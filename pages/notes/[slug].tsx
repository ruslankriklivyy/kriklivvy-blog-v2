import React from 'react';
import { Layout } from '../../layouts/Layout';
import fs from 'fs';
import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import matter from 'gray-matter';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js';
import 'gitalk/dist/gitalk.css';
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import Link from 'next/link';
import { IPost } from '../../interfaces/interfaces';
import s from '../posts/post.module.scss';

interface INoteProps {
  frontmatter: IPost;
  content: any;
}

const Note: NextPage<INoteProps> = ({ frontmatter, content }) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  React.useEffect(() => {
    const gitalk = new Gitalk({
      clientID: 'f830156d260e6218807c',
      clientSecret: '0df77ececfca0222cbd5cde154f3907e93001ed8',
      repo: 'comments-data',
      owner: 'ruslankriklivyy',
      admin: ['ruslankriklivyy'],
      id: frontmatter.id,
      distractionFreeMode: false,
    });

    gitalk.render('gitalk-container');
  }, [frontmatter.id]);

  return (
    <Layout name={frontmatter.title}>
      <div className={s.post}>
        <div className="box">
          <h2>{frontmatter.title}</h2>
          <div className={s.postInfo}>
            <Link href={`/category/${frontmatter.categoryLink}`}>
              <a className={s.postCategory}>
                <span style={{ backgroundColor: `#${frontmatter.categoryColor}` }}></span>
                <p>{frontmatter.category}</p>
              </a>
            </Link>
            <div className={s.postDate}>
              <p>Дата: {frontmatter.date}</p>
            </div>
          </div>
          <div className="box-content" dangerouslySetInnerHTML={{ __html: content }} />
          <div id="gitalk-container"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Note;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('notes'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const markdownWithMeta = fs.readFileSync(path.join('notes', ctx.params?.slug + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug: ctx.params?.slug,
      content,
    },
  };
};
