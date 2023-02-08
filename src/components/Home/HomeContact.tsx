import styles from "@/styles/Home.module.sass";
import Image from "next/image";

export default function Contact() {
  const chosen = [
    {
      id: "facebook",
      url: "https://www.facebook.com/wheat.youheguowen/",
    },
    {
      id: "line",
      url: "https://lin.ee/2UoO3Q2",
    },
  ];
  return (
    <section className={styles.contact}>
      <h3>聯絡我們</h3>
      <ul>
        {chosen.map((e) => (
          <li key={e.id}>
            <a href={e.url} target="_blank" rel="noreferrer">
              <Image src={`/${e.id}.svg`} alt={e.id} width={50} height={50} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
