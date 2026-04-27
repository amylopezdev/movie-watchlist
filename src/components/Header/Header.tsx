import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <span aria-hidden="true">🎬</span> Watchlist
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link to="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
          </li>
          <li>
            <Link to="/watchlist" aria-current={pathname === "/watchlist" ? "page" : undefined}>Watchlist</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
