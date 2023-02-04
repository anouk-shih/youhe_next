import styles from "@/styles/Home.module.sass";

export default function BrandValue() {
  const chosen = [
    {
      id: "v00",
      title: "實用",
      desc: "有禾國文的課程將協助孩子將語文轉化成可實際運用的工具。我們不打高空，也不願只為考試而教，而是希望孩子能透過課程，培養使用文字的能力。",
      icon: "emoji_objects",
    },
    {
      id: "v01",
      title: "溫暖 ",
      desc: "有禾國文的課程致力於培養孩子的情思。我們希望將文章中溫暖感性的一面呈現給孩子，也秉持溫暖親和的態度對待每個孩子。",
      icon: "diversity_1",
    },
    {
      id: "v02",
      title: "趣味",
      desc: "我們始終重視課程的趣味性。有禾國文的最高目標是「孩子每上一堂課，都能帶一個故事走」；另外希望能透過課堂間的相互分享，與孩子一同享受充滿笑聲的時光。",
      icon: "clear_day",
    },
    {
      id: "v03",
      title: "貼近的",
      desc: "我們致力於讓課程盡可能貼近孩子的生活，讓孩子一點就通。另外，不論是流行話題、音樂追星，還是發燒youtuber的崛起，都歡迎與老師聊聊喔！",
      icon: "diversity_4",
    },
  ];
  return (
    <section className={styles.value}>
      <h3>
        <span className="material-symbols-rounded">format_quote</span>
        <span>
          起於無心播種，
          <br />
          終於富足收穫
        </span>
        <span className="material-symbols-rounded">format_quote</span>
      </h3>
      <ul>
        {chosen.map((e) => (
          <div className={styles.value__card}>
            <i className="material-symbols-rounded">{e.icon}</i>
            <h6>{e.title}</h6>
            <p>{e.desc}</p>
          </div>
        ))}
      </ul>
    </section>
  );
}
