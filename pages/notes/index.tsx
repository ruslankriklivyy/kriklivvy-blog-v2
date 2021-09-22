import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import useInView from 'react-cool-inview';
import dynamic from 'next/dynamic';

import { Layout } from '../../layouts/Layout';
import { NextPage } from 'next';
import { IPostResponse } from '../../interfaces/interfaces';

interface INotesProps {
  notes: IPostResponse[];
}

const NotesComponent = dynamic(() => import('../../components/Notes'));

const Notes: NextPage<INotesProps> = ({ notes }) => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <Layout name="Заметки">
      <div ref={observe}>{inView && <NotesComponent notes={notes} />}</div>
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
