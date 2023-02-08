import styles from "@/styles/Normal.module.sass";
import { useId } from "react";

export default function Course() {
  const chosen = [
    {
      id: useId(),
      title: "一對一",
      desc: "",
      list: [
        {
          id: useId(),
          title: "20小時（常態國語文課程）",
          price: [
            {
              id: useId(),
              name: "",
              cost: 670,
            },
          ],
        },
        {
          id: useId(),
          title: "1小時（作文批改講解、單次考試／特定範圍解題）",
          price: [
            {
              id: useId(),
              name: "",
              cost: 800,
            },
          ],
        },
        {
          id: useId(),
          title: "5小時（五堂暑期課程、短時間的單次段考複習）",
          price: [
            {
              id: useId(),
              name: "",
              cost: 750,
            },
          ],
        },
        {
          id: useId(),
          title: "10小時（十堂暑期課程）",
          price: [
            {
              id: useId(),
              name: "",
              cost: 700,
            },
          ],
        },
      ],
    },
    {
      id: useId(),
      title: "主題式團班",
      desc: (
        <p>
          （2-4人，此為由老師主動開設的課程，預設人數與課程內容將由老師決定。）
        </p>
      ),
      list: [
        {
          id: useId(),
          title: "20小時（常態國語文課程）",
          desc: "",
          price: [
            {
              id: useId(),
              name: "2人班",
              cost: 620,
            },
            {
              id: useId(),
              name: "3人班",
              cost: 550,
            },
            {
              id: useId(),
              name: "4人班",
              cost: 500,
            },
          ],
        },
        {
          id: useId(),
          title: "5小時（五堂暑期課程、短時間的單次段考複習）",
          price: [
            {
              id: useId(),
              name: "2人班",
              cost: 680,
            },
            {
              id: useId(),
              name: "3人班",
              cost: 660,
            },
            {
              id: useId(),
              name: "4人班",
              cost: 640,
            },
          ],
        },
        {
          id: useId(),
          title: "10小時（十堂暑期課程）",
          price: [
            {
              id: useId(),
              name: "2人班",
              cost: 640,
            },
            {
              id: useId(),
              name: "3人班",
              cost: 580,
            },
            {
              id: useId(),
              name: "4人班",
              cost: 530,
            },
          ],
        },
      ],
    },
    {
      id: useId(),
      title: "私人包班",
      desc: (
        <div>
          <p>（2-4人，自行組隊，課程內容客製化）</p>
          <h6>私人包班注意事項：</h6>
          <p>1. 請先看老師課表中開放自行組隊的時間，再揪團報名喔！</p>
          <p>2. 原則上以同年級同學、有共同學習目標為主。</p>
          <p>3. 開課之前，會需要先跟老師聊聊，了解學生狀況以及確認學習目標。</p>
        </div>
      ),
      list: [
        {
          id: useId(),
          title: "20小時（常態國語文課程）",
          price: [
            {
              id: useId(),
              name: "2人班",
              cost: 650,
            },
            {
              id: useId(),
              name: "3人班",
              cost: 580,
            },
            {
              id: useId(),
              name: "4人班",
              cost: 530,
            },
          ],
        },
        {
          id: useId(),
          title: "5小時（五堂暑期課程、短時間的單次段考複習）",
          price: [
            {
              id: useId(),
              name: "2人班",
              cost: 710,
            },
            {
              id: useId(),
              name: "3人班",
              cost: 690,
            },
            {
              id: useId(),
              name: "4人班",
              cost: 670,
            },
          ],
        },
        {
          id: useId(),
          title: "10小時（十堂暑期課程）",
          price: [
            {
              id: useId(),
              name: "2人班",
              cost: 670,
            },
            {
              id: useId(),
              name: "3人班",
              cost: 610,
            },
            {
              id: useId(),
              name: "4人班",
              cost: 560,
            },
          ],
        },
      ],
    },
  ];
  return (
    <section className={styles.course}>
      <ul>
        {chosen.map((e) => (
          <li key={e.id}>
            <h3>{e.title}</h3>
            {e.desc}
            <ul>
              {e.list.map((li) => (
                <li className={styles.course__card} key={li.id}>
                  <h4>{li.title}</h4>
                  {li.price.map((p) => (
                    <div key={p.id}>
                      <h6>{p.name}</h6>
                      <p>{`費用：一人 NT$${p.cost}/堂`}</p>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
