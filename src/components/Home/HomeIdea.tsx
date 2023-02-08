import styles from "@/styles/Home.module.sass";
import Image from "next/image";
import { GoQuote } from "react-icons/go";

export default function Idea() {
  return (
    <section className={styles.idea}>
      <Image src="/logo.svg" alt="有禾國文" width={250} height={250} />
      <div className={styles.idea__number}>
        <p>
          自2018開業，續課率高達<span>90%</span>
        </p>
      </div>
      <div className={styles.idea__slogan}>
        <GoQuote />
        <GoQuote />

        <p>
          讓語文成為
          <br />
          體驗人生的加速器
        </p>
        <p>
          希望孩子們能在課堂之中獲得溫暖的共鳴，讓孩子想像尚未見到的人生風景。
        </p>
      </div>
    </section>
  );
}
