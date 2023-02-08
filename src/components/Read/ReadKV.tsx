import styles from "@/styles/Normal.module.sass";
import Link from "next/link";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function KV() {
  const style = {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1586380951230-e6703d9f6833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")',
  };
  return (
    <section className={styles.kv} style={style}>
      <div className={styles.kv__content}>
        <p>閱寫班</p>
      </div>
      <div className={styles.kv__item}>
        <Link href="/normal">
          <BsFillArrowLeftCircleFill />
          <p>國語文課程</p>
        </Link>
        <Link href="/other_services">
          <p>其他服務</p>
          <BsFillArrowRightCircleFill />
        </Link>
      </div>
    </section>
  );
}
