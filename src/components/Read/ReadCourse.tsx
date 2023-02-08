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
          title: "十五堂常態課程",
          price: [
            {
              id: useId(),
              name: "",
              cost: 1005,
            },
          ],
        },
        {
          id: useId(),
          title: "五堂暑期課程",
          price: [
            {
              id: useId(),
              name: "",
              cost: 960,
            },
          ],
        },
      ],
    },

    {
      id: useId(),
      title: "團班／私人包班（2-3人，可自行組隊。）",
      desc: "",
      list: [
        {
          id: useId(),
          title: "十五堂常態課程",
          price: [
            {
              id: useId(),
              name: "2人班",
              cost: 930,
            },
            {
              id: useId(),
              name: "3人班",
              cost: 825,
            },
            {
              id: useId(),
              name: "4人班",
              cost: 750,
            },
          ],
        },
        {
          id: useId(),
          title: "五堂暑期課程",
          price: [
            {
              id: useId(),
              name: "2人班",
              cost: 900,
            },
            {
              id: useId(),
              name: "3人班",
              cost: 850,
            },
            {
              id: useId(),
              name: "4人班",
              cost: 800,
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
