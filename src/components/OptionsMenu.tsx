import styles from "@/styles/layout.module.sass";
import { useState } from "react";

export default function OptionMenu() {
  const options = [
    { id: "home", icon: "home", name: "首頁" },
    { id: "chinese", icon: "import_contacts", name: "國文課" },
    { id: "booking", icon: "bolt", name: "立即體驗" },
    { id: "composition", icon: "edit_note", name: "作文課" },
    { id: "contact", icon: "sms", name: "LINE@" },
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
              <i className="material-symbols-rounded">{e.icon}</i>
            </div>
            <p>{e.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
