import Image from "next/image";
import styles from "@/styles/layout.module.sass";

export default function LogoBar() {
  return (
    <div className={styles.logo}>
      <Image src="/logo.svg" alt="有禾國文" width={80} height={80} priority />
      <h1 className="pb-3 text-2xl font-bold tracking-widest">有禾國文</h1>
    </div>
  );
}
