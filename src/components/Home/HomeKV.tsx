import styles from "@/styles/Home.module.sass";

export default function KV() {
  const style = {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
  };
  return (
    <section className={styles.kv} style={style}>
      <div className={styles.kv__content}>
        <p>一堂想讓你</p>
        <p className="space-x-4 animate-pulse">
          <span className="text-4xl text-primary">快樂</span>
          <span className="text-4xl text-secondary">改變</span>
        </p>
        <p>有收穫的課堂</p>
      </div>
      {/* <button type="button" className="btn-primary">
        查看我們的課程
      </button> */}
    </section>
  );
}
