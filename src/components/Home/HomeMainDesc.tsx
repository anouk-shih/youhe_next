import styles from "@/styles/Home.module.sass";

export default function Desc() {
  const style = {
    backgroundImage:
      'url("https://images.unsplash.com/flagged/photo-1553028826-ccdfc006d078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
  };
  return (
    <section className={styles.desc}>
      <div className={styles.desc__container}>
        <div className={styles.desc__title}>
          <p>孩子的笑容</p>
          <p>是我們的收穫</p>
        </div>
        <div className={styles.desc__content}>
          <p>
            我們重視的，不只是孩子在學業上的收穫，更重視孩子的心靈與笑容。我們力求每一堂課都帶有溫度，並與孩子有美好的交流時光。
          </p>
          <p>
            有禾國文的核心精神為「學習生活、豐富心靈」，我們致力於將課內的國語文知識，結合歷史、哲學、生活美學，拓展出更為寬廣的面向，並以高度互動的方式，讓學生喜愛每一次的課堂。
          </p>
        </div>
      </div>
    </section>
  );
}
