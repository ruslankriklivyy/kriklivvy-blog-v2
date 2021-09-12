import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

import Layout from '../../layouts/Layout';
import PostItem from '../../components/Posts/PostItem';
import s from '../../components/Posts/posts.module.scss';

const Notes = ({ notes }) => {
  return (
    <Layout name="Заметки">
      <div className={s.notes}>
        {notes.map(({ slug, frontmatter }) => (
          <Link href={`/notes/${slug}`} key={frontmatter.id}>
            <a>
              <PostItem {...frontmatter} />
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Notes;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('notes'));

  const notes = files.map((filename) => {
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
      notes: notes,
    },
  };
}
