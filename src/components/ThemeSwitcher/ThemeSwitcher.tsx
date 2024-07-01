import React from 'react';
import styles from './ThemeSwitcher.module.scss';
import { ReactComponent as sunIcon } from '../../assets/icon-sun.svg';
import { ReactComponent as darkIcon } from '../../assets/icon-moon.svg';

export const ThemeSwitcher = () => {
  const [isDark, setDark] = React.useState(false);

  const themeText = isDark ? 'Dark' : 'Light';
  const ThemeIcon = isDark ? darkIcon : sunIcon;

  React.useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
