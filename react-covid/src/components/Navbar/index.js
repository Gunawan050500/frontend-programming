import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.container}>
      <div>
        <p className={styles.brand__name}>
          Covid ID
        </p> 
      </div>
        <ul className={styles.menu__wrapper}>
          <li className={styles.menu__item}>Global</li>
          <li className={styles.menu__item}>Indonesia</li>
          <li className={styles.menu__item}>Provinsi</li>
          <li className={styles.menu__item}>About</li>
        </ul>
    </nav>
  );
}

export default Navbar;
