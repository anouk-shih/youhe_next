import styles from "@/styles/Home.module.sass";

export default function next() {
  return (
    <section className={styles.next}>
      <div className="next__context">
        <p className="text-xl italic font-bold text-theme">Next Event</p>
        <p className="text-xl">111學年度第1學期 團班課程招生中</p>
        <p className="text-sm font-bold text-stone-400">10:00AM - 3:00PM</p>
      </div>
      <button type="button" className="flex btn-primary">
        現在報名
      </button>
    </section>
  );
}
