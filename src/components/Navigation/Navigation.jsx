import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { FcHome, FcContacts } from 'react-icons/fc';
import clsx from 'clsx';

import styles from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink className={buildLinkClass} to='/'>
        <FcHome />
        <span>Home</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to='/contacts'>
          <FcContacts />
          <span>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
