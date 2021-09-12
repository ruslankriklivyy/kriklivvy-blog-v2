import React from 'react';
import Image from 'next/image';

import s from './posts.module.scss';

const myLoader = ({ src }: any) => {
  return `https://live.staticflickr.com/65535/${src}`;
};

interface IPostItemProps {
  poster: string;
  mainColor: string;
  title: string;
  categoryColor: string;
  description: string;
  category: string;
}

const PostItem: React.FC<IPostItemProps> = ({
  poster,
  mainColor,
  title,
  categoryColor,
  description,
  category,
}) => {
  return (
    // <a>
    <>
      <div className={s.postsItemPoster}>
        <Image loader={myLoader} src={poster} alt="poster jpg" width={500} height={500} />
      </div>
      <div
        className={s.mainColor}
        style={{
          boxShadow: `0 20px 30px rgba(${mainColor}, 0.6)`,
        }}></div>
      <div className={s.postsItemInfo}>
        <div className={s.postsItemCategory}>
          <span style={{ backgroundColor: `#${categoryColor}` }}></span>
          <p>{category}</p>
        </div>
        <h2 className={s.postsItemName}>{title}</h2>
        <p className={s.postsItemDescr}>{description}</p>
      </div>
    </>
    // </a>
  );
};

export default PostItem;
