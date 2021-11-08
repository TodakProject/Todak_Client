import HeaderMenuList from "./Header_menuList";
import styles from "./scss/header.module.scss";
const NavHeader = () => {
  return (
    <header className={styles["nav-header"]}>
      <div className={styles["logo-container"]}>
        <img src="/images/common/main_logo.svg" alt="토닥 로고" />
      </div>
      <HeaderMenuList></HeaderMenuList>
      <div className={styles["login-container"]}>
      <a href="/login">로그인</a>
      </div>
    </header>
  );
};

export default NavHeader;
