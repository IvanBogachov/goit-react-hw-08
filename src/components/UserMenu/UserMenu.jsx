import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '/src/redux/auth/selectors.js';
import { logout } from '/src/redux/auth/operations.js';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>Welcome, {name}!</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
