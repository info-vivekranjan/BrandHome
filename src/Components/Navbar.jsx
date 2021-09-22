import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BrandHomeContext } from "../Context/BrandHomeContextProvider";
import styles from "./Css/Navbar.module.css";

function NavBar() {
  const { theme, currentTheme, toggleTheme } = useContext(BrandHomeContext);

  return (
    <nav>
      <section className={styles.navCont}>
        <div className={styles.navLeft}>
          <Link to="/" className={styles.logoLink}>
            BH
          </Link>
          <Link to="/" className={styles.typeLink}>
            MEN
          </Link>
          <Link to="/" className={styles.typeLink}>
            WOMEN
          </Link>
          <Link to="/" className={styles.typeLink}>
            KIDS
          </Link>
          <Link to="/" className={styles.typeLink}>
            BEAUTY
          </Link>
        </div>
        <div className={styles.navRight}>
          <div className={styles.bagCont}>
            <i className="ri-shopping-bag-line"></i>
          </div>

          <div>
            <div className={styles.lightModeCont}>
              {currentTheme === "light" && (
                <i onClick={toggleTheme} className="ri-moon-line"></i>
              )}
            </div>
            <div className={styles.darkModeCont}>
              {currentTheme === "dark" && (
                <i onClick={toggleTheme} className="ri-sun-line"></i>
              )}
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}
export { NavBar };
