import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar className={styles.barContainer} />
      <main className={styles.pageContainer}>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
