import React from 'react';
import Image from 'next/image';

import s from './about.module.scss';
import { IMyLoaderImg } from '../../interfaces/interfaces';

const myLoader = ({ src }: IMyLoaderImg) => {
  return `https://live.staticflickr.com/65535/${src}`;
};

export const About = () => {
  return (
    <div className={s.about}>
      <div className={s.aboutTop}>
        <div className={s.aboutLeft}>
          <p>
            Привет! 👋 Меня зовут <strong>Крикливый Руслан</strong>, мне 19 лет. Нравится создавать
            веб-интерфейсы с помощью JavaScript / Typescript. Имею небольшой опыт работы
            HTML-верстальщиком. <br /> Люблю ReactJS ⚛, а так же стараюсь писать понятный и
            оптимизированный код.
            <br />
            <br />В этом блоге в основном будут посты об разработке и моих интересах. Спасибо за
            любопытство!
          </p>
        </div>
        <div className={s.aboutRight}>
          <Image
            loader={myLoader}
            src="51570167505_4687cf0f9f_b.jpg"
            alt="avatar jpg"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className={s.aboutBottom}>
        <h3>Мои навыки</h3>
        <div className={s.aboutSkills}>
          <div className={s.aboutSkillsItem}>
            <h4>Frontend</h4>
            <ul>
              <li className="main-list__item">JavaScript / TypeScript</li>
              <li className="main-list__item">ReactJS / VueJS</li>
              <li className="main-list__item">
                Redux Saga / Redux Thunk / Redux Toolkit / MobX / Vuex
              </li>
              <li className="main-list__item">HTML, CSS (SCSS / SASS / Styled Components)</li>
              <li className="main-list__item">NextJS / GatsbyJS / NuxtJS</li>
              <li className="main-list__item">Formik / React Hook Form</li>
            </ul>
          </div>
          <div className={s.aboutSkillsItem}>
            <h4>Other</h4>
            <ul>
              <li className="main-list__item">GitHab</li>
              <li className="main-list__item">FireBase</li>
              <li className="main-list__item">Axios</li>
              <li className="main-list__item">npm / yarn</li>
              <li className="main-list__item">JSON</li>
              <li className="main-list__item">GraphQL</li>
              <li className="main-list__item">React Cookie</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
