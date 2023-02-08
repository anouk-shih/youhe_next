import styles from "@/styles/Normal.module.sass";
import Link from "next/link";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function KV() {
  const style = {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
  };
  return (
    <section className={styles.kv} style={style}>
      <div className={styles.kv__content}>
        <p>其他服務</p>
      </div>
      <div className={styles.kv__item}>
        <Link href="/readnwrite">
          <BsFillArrowLeftCircleFill />
          <p>閱寫班</p>
        </Link>
        <Link href="/normal">
          <p>國語文課程</p>
          <BsFillArrowRightCircleFill />
        </Link>
      </div>
    </section>
  );
}
