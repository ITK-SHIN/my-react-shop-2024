import { IoMoon } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';
import styles from './DarkMode.module.css';
import { useState } from 'react';

const DarkMode = () => {
  const selectedTheme = localStorage.getItem('selectedTheme');
  const [isDark, setIsDark] = useState(selectedTheme === 'dark');

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
  };

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    localStorage.setItem('selectedTheme', 'light');
  };

  const toggleTheme = (e) => {
    setIsDark(!isDark);
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  if (selectedTheme === null) {
    localStorage.setItem('selectedTheme', 'dark');
  }

  if (selectedTheme === 'light') {
    setLightMode();
  }
  return (
    <div className={styles.dark_mode}>
      <input
        className={styles.dark_mode_input}
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === 'dark'}
      />
      <label className={styles.toggle_box} htmlFor="darkmode-toggle">
        {isDark ? (
          <MdOutlineWbSunny className={styles.toggle__sun} />
        ) : (
          <IoMoon className={styles.toggle__moon} />
        )}
      </label>
    </div>
  );
};

export default DarkMode;
