import styles from "@/styles/Normal.module.sass";

export default function KV() {
  const style = {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")',
  };
  return (
    <section className={styles.kv} style={style}>
      <div className={styles.kv__content}>
        <div className="kv__item">
          <p>其他服務</p>
        </div>
        <p>一般國語文課程</p>
        <div className="kv__item">
          <p>閱寫班</p>
        </div>
      </div>
    </section>
  );
}
