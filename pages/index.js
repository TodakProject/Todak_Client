import Layout from "../component/common/Layout";
import styles from "../styles/Home.module.scss";
import MainIntro from "../component/main/Main_intro";
export default function Main() {
  Main.Layout = {
    browser: Layout,
  };

  return (
    <div className={styles["wrapper"]}>
      <MainIntro></MainIntro>
    </div>
  );
}
