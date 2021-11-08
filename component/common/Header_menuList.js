import styles from "./scss/header_menuList.module.scss";
const HeaderMenuList = () => {
  const menulist = [
    { idx: 1, name: "토닥하기", url: "/todak" },
    { idx: 2, name: "심리테스트", url: "/psychologicaltest" },
    { idx: 3, name: "토닥터", url: "/todactor" },
    { idx: 4, name: "커뮤니티", url: "/community" },
  ];

  const HeaderMenu = () => {
    let tmp = [];
    for (let i = 0, len = menulist.length; i < len; i++) {
      const menu = menulist[i];
      tmp.push(
        <li key={`header-menu${menu.idx}`}>
          <a href={menu.url}>{menu.name}</a>
        </li>
      );
    }
    return tmp;
  };

  return (
    <div className={styles["menuList-container"]}>
      <ul className={styles["menu-list"]}>{HeaderMenu()}</ul>
    </div>
  );
};
export default HeaderMenuList;