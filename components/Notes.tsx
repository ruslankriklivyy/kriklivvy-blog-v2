import React from 'react';
import Link from 'next/link';

import { PostItem } from './Posts/PostItem';
import s from '../components/Posts/posts.module.scss';
import { IPostResponse } from '../interfaces/interfaces';

interface INotesProps {
  notes: IPostResponse[];
}

const Notes: React.FC<INotesProps> = ({ notes }) => {
  return (
    <div className={s.notes}>
      {notes.map(({ slug, frontmatter }) => (
        <Link href={`/notes/${slug}`} key={frontmatter.id}>
          <a>
            <PostItem {...frontmatter} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Notes;
