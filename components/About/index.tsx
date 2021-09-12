import React from 'react';
import Image from 'next/image';

import s from './about.module.scss';

const myLoader = ({ src }: any) => {
  return `https://live.staticflickr.com/65535/${src}`;
};

const About = () => {
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
            src="51445247762_8b17e988ac_b.jpg"
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
            <span>JavaScript / TypeScript</span>
            <span>ReactJS / VueJS</span>
            <span>Redux Saga / Redux Thunk / Redux Toolkit / MobX / Vuex</span>
            <span>HTML, CSS (SCSS / SASS / Styled Components)</span>
            <span>NextJS / GatsbyJS / NuxtJS</span>
            <span>Formik / React Hook Form</span>
          </div>
          <div className={s.aboutSkillsItem}>
            <h4>Other</h4>
            <span>GitHab</span>
            <span>FireBase</span>
            <span>Axios</span>
            <span>npm / yarn</span>
            <span>JSON</span>
            <span>GraphQL</span>
            <span>React Cookie</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
