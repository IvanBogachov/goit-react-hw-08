import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '/src/redux/auth/selectors.js';
import { logout } from '/src/redux/auth/operations.js';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div>
      <p>Welcome, {userName}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
