import styles from "@/styles/layout.module.sass";
import { useState } from "react";
import { FaHome, FaBook, FaBookReader } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

export default function OptionMenu() {
  const options = [
    { id: "home", icon: <FaHome />, name: "首頁" },
    { id: "chinese", icon: <FaBook />, name: "國文課" },
    { id: "booking", icon: <HiLightningBolt />, name: "立即體驗" },
    { id: "composition", icon: <FaBookReader />, name: "作文課" },
    { id: "contact", icon: <HiChatBubbleBottomCenterText />, name: "LINE@" },
  ];

  const [active, setActive] = useState("home");

  return (
    <section>
      <ul className={styles.menu}>
        {options.map((e) => (
          <li
            role="presentation"
            className={styles.menu__option}
            key={e.id}
            onClick={() => {}}
            onKeyDown={() => {
              setActive(e.id);
            }}
          >
            <div
              className={`${styles.menu__circle} ${
                active === e.id ? styles.active : ""
              }`}
            >
              {e.icon}
            </div>
            <p>{e.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
