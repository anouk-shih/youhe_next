import styles from "@/styles/Other.module.sass";
import { useId } from "react";

export default function Course() {
  const chosen = [
    {
      id: useId(),
      title: "（國小～高中）批改作文：簡批",
      desc: <p>只會改錯字，稍微順語句，1~2句評語。</p>,
      price: "每篇40元",
    },
    {
      id: useId(),
      title: "（國小～高中）批改作文：詳批",
      desc: (
        <p>
          改錯字、順語句，給予3句以上超認真評語，同時在評語中也會建議如何修改，與日後寫作方向
        </p>
      ),
      price: "每篇80元",
    },
    {
      id: useId(),
      title: "大學生諮詢報告",
      desc: (
        <div>
          <p>小方向：順語句</p>
          <p>大方向：協助檢視、調整章節結構，給予寫作方向建議，並進行評點。</p>
        </div>
      ),
      price: "每篇800元",
    },
    {
      id: useId(),
      title: "喝杯咖啡吧（僅限臺北捷運綠線沿線範圍）",
      desc: (
        <div>
          <p>小麥老師喜歡咖啡！ </p>
          <p>請我到咖啡店喝杯咖啡吧～</p>
          <p>
            若你有題目想親自諮詢，或是想上一堂30分鐘左右的小課，或是想知道目前讀書方式還有沒有需要調整的，都歡迎和我面對面聊聊。一次一小時為限。
          </p>
        </div>
      ),
      price: (
        <div>
          <p>一杯店內飲品</p>
          <p>車馬費</p>
          以及單趟花費時間時薪（1hr/100元，未滿1hr以1hr計算）
          <p />
        </div>
      ),
    },
  ];
  return (
    <section className={styles.course}>
      <ul>
        {chosen.map((e) => (
          <li className={styles.course__card} key={e.id}>
            <h4>{e.title}</h4>
            {e.desc}
            <p>{e.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
