import React from 'react';
import Image from 'next/image';

import s from './posts.module.scss';

const myLoader = ({ src }: any) => {
  return `https://live.staticflickr.com/65535/${src}`;
};

const Posts = () => {
  return (
    <div className={s.posts}>
      <a href="#" className={s.postsItem}>
        <div className={s.postsItemPoster}>
          <Image
            loader={myLoader}
            src="51444542302_25f94394b7_b.jpg"
            alt="poster jpg"
            width={500}
            height={500}
          />
        </div>
        <div className={s.postsItemInfo}>
          <div className={s.postsItemCategory}>
            <span></span> <p>Программирование</p>
          </div>
          <h2 className={s.postsItemName}>Как я изучил JavaScript</h2>
          <p className={s.postsItemDescr}>
            Расскажу о том как я будучи гуманитарием изучил язык программирования JavaScipt.
            Полезные ссылки прилагаються.
          </p>
        </div>
      </a>
    </div>
  );
};

export default Posts;
