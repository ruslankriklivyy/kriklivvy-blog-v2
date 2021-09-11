import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import s from './header.module.scss';

const Header = () => {
  const router = useRouter();
  const [toggleMode, setToggleMode] = React.useState(false);

  const handleMode = (isMode: boolean) => {
    setToggleMode(isMode);
    localStorage.setItem('darkMode', JSON.stringify(isMode));
  };

  React.useEffect(() => {
    if (localStorage.getItem('darkMode')) {
      const darkMode = JSON.parse(localStorage.getItem('darkMode') || '{}');
      setToggleMode(darkMode);
      toggleMode
        ? document.querySelector<HTMLElement>('body')?.classList.add('dark')
        : document.querySelector<HTMLElement>('body')?.classList.remove('dark');
    }
  }, [toggleMode]);

  return (
    <header className={s.header}>
      <a href="#" className={s.logo}>
        Kriklivvy Blog
      </a>
      <div className={s.headerRight}>
        <nav className={s.nav}>
          <ul className={s.menu}>
            <li className={router.pathname === '/' ? s.menuItemActive : s.menuItem}>
              <Link href="/">Главная</Link>
            </li>
            <li className={s.menuItem}>
              <a href="#">Заметки</a>
            </li>
            <li className={router.pathname === '/about' ? s.menuItemActive : s.menuItem}>
              <Link href="/about">Обо мне</Link>
            </li>
          </ul>
        </nav>
        <div className={s.toggleMode}>
          <input
            type="checkbox"
            id="toggle"
            checked={toggleMode}
            onChange={() => handleMode(!toggleMode)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
