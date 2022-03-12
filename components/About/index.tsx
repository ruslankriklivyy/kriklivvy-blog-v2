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
            Привет, меня зовут <strong>Крикливый Руслан</strong>, мне 19 лет. Я Fullstack
            разработчик. Работаю в компании{' '}
            <a href="https://quartsoft.com/" className="link link--big">
              QuartSoft.
            </a>{' '}
            <br /> Люблю ReactJS ⚛, а так же стараюсь писать понятный и оптимизированный код.
            <br />
            <br />В этом блоге будут посты об разработке и моих интересах. Спасибо за любопытство!
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
          <div className={s.aboutRightBottom}>
            <nav className="social">
              <a className="github" href="https://github.com/ruslankriklivyy">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve">
                  <g>
                    <g>
                      <path
                        d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
			c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
			c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
			c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
			c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
			c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
			c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
			c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
			c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <a className="telega" href="https://t.me/ruslankriklivy">
                <svg
                  id="Bold"
                  enableBackground="new 0 0 24 24"
                  height="512"
                  viewBox="0 0 24 24"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" />
                </svg>
              </a>
              <a className="mail" href="mailto:ruslankriklivyy@gmail.com">
                <svg
                  id="Capa_1"
                  enableBackground="new 0 0 465.882 465.882"
                  height="512"
                  viewBox="0 0 465.882 465.882"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="m232.941 0c-128.442 0-232.941 104.499-232.941 232.941s104.499 232.941 232.941 232.941c40.961 0 81.239-10.777 116.499-31.179l-29.146-50.416c-26.416 15.284-56.629 23.36-87.353 23.36-96.338 0-174.706-78.368-174.706-174.706s78.368-174.706 174.706-174.706 174.706 78.368 174.706 174.706v25.364c0 19.052-12.241 32.871-29.118 32.871-16.052 0-29.118-13.066-29.118-29.118v-116.47h-40.251c-20.484-17.895-46.948-29.118-76.219-29.118-64.221 0-116.471 52.25-116.471 116.471s52.25 116.471 116.471 116.471c30.582 0 58.232-12.094 79.036-31.442 16.036 19.057 39.754 31.442 66.552 31.442 48.98 0 87.353-40.022 87.353-91.107v-25.364c0-128.442-104.499-232.941-232.941-232.941zm0 291.176c-32.118 0-58.235-26.118-58.235-58.235 0-32.118 26.118-58.235 58.235-58.235 32.118 0 58.235 26.118 58.235 58.235 0 32.118-26.117 58.235-58.235 58.235z" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className={s.aboutBottom}>
        {/* <h3>Мои навыки</h3>
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
        </div> */}
      </div>
    </div>
  );
};
