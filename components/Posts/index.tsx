import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import s from './posts.module.scss';
import { IPostResponse } from '../../interfaces/interfaces';

interface IPostsProps {
  posts: IPostResponse[];
}

const myLoader = ({ src }: any) => {
  return `https://live.staticflickr.com/65535/${src}`;
};

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  return (
    <div className={s.posts}>
      {posts.map(({ slug, frontmatter }) => (
        <Link href={`/posts/${slug}`} key={frontmatter.id}>
          <a>
            <div className={s.postsItemPoster}>
              <Image
                loader={myLoader}
                src={frontmatter.poster}
                alt="poster jpg"
                width={500}
                height={500}
              />
            </div>
            <div className={s.postsItemInfo}>
              <div className={s.postsItemCategory}>
                <span></span> <p>{frontmatter.category}</p>
              </div>
              <h2 className={s.postsItemName}>{frontmatter.title}</h2>
              <p className={s.postsItemDescr}>{frontmatter.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
