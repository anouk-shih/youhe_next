import styles from "@/styles/Home.module.sass";
import Image from "next/image";

export default function Contact() {
  const chosen = [
    {
      id: "facebook",
    },
    {
      id: "line",
    },
  ];
  return (
    <section className={styles.contact}>
      <h3>聯絡我們</h3>
      <ul>
        {chosen.map((e) => (
          <div key={e.id}>
            <Image src={`/${e.id}.svg`} alt={e.id} width={80} height={80} />
          </div>
        ))}
      </ul>
    </section>
  );
}
