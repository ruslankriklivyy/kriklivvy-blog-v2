import React from 'react';
import useInView from 'react-cool-inview';
import dynamic from 'next/dynamic';

import { Layout } from '../../layouts/Layout';
import { NextPage } from 'next';
import { IPostResponse } from '../../interfaces/interfaces';
import { getData } from '../../utils/getData';

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
  const notes = getData('notes');

  return {
    props: {
      notes: notes,
    },
  };
}
