import styles from "./scss/main_intro.module.scss";
const MainIntro=()=>{

    return(
        <section className={styles["intro-section"]}>
            <div className={styles["intro-title"]}>
                <h1>오늘 하루도 고생했어요.<br>
                </br>
                토닥토닥 <img src="/images/common/smile_icon.png" alt="토닥 스마일아이콘" />
                </h1>
                <a href="/todak">
                    토닥하기
                </a>
            </div>
            <div className={styles["introImg-container"]}>
                <img src="/images/common/main_img.png" alt="토닥 메인이미지" />
            </div>
        </section>
    )
}

export default MainIntro;