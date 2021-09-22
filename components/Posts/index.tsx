import React from 'react';
import Link from 'next/link';

import s from './posts.module.scss';
import { IPostResponse } from '../../interfaces/interfaces';
import { PostItem } from './PostItem';

interface IPostsProps {
  posts: IPostResponse[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  return (
    <div className={s.posts}>
      {posts.map(({ slug, frontmatter }) => (
        <Link href={`/posts/${slug}`} key={frontmatter.id}>
          <a>
            <PostItem {...frontmatter} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
