import styles from "@/styles/Home.module.sass";

export default function Teacher() {
  const style = {
    backgroundImage: 'url("./teacher.jpg")',
  };

  return (
    <section className={styles.teacher}>
      <div className={styles.teacher__container}>
        <h3>師資介紹</h3>
        <div className={styles.teacher__row}>
          <div>
            <div className={styles.teacher__img} style={style} />
            <h4 className={styles.teacher__title}>周郁穎（小麥）</h4>
          </div>
          <div className={styles.teacher__content}>
            <h5>學歷</h5>
            <p>國立中山大學 中國文學系 學士</p>
            <p>國立臺灣大學 臺灣文學研究所 碩士</p>
            <h5>經歷</h5>
            <h6>工作經歷</h6>
            <p>向品語文文理短期補習班 講師</p>
            <p>智鑰一對一 講師</p>
            <p>好識文創：學生週刊 作文老師</p>
            <p>AmazingTalker 國文老師</p>
            <h6>其他經歷／證書</h6>
            <p>CWT全民中文檢定 優等</p>
            <p>西子灣文學獎 新詩獎貳獎</p>
            <p>西子灣文學獎 小說獎入圍</p>
            <p> 詩集《沉舟記》 共同作者</p>
            <p>臺灣文學桌遊《文壇封鎖中》 遊戲共同作者</p>
            <h6>現職</h6>
            <p>有禾國文線上教學負責人</p>
            <p>智擘數位科技特約作者</p>
            <h5>理念</h5>
            <ul>
              <li>開心學習才能使成效最大化！照本宣科是NO！</li>
              <li>教學不應該只為了考試，不會全為考試而教。</li>
              <li>設定合理目標，合理要求學生是我的第一原則。</li>
              <li>啟發大於灌輸，思考是課堂上不會放棄的環節。</li>
              <li>語文是體驗人生的加速器，認識世界的第一步。</li>
              <li>彼此聆聽，老師與學生應該是教學相長的關係。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
