import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '/src/redux/auth/selectors.js';
import { logout } from '/src/redux/auth/operations.js';
// import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userName}!</p>
      <button type='button' onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
