import styles from "@/styles/layout.module.sass";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaHome, FaBook, FaBookReader } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

export default function OptionMenu() {
  const options = [
    { id: "home", icon: <FaHome />, name: "首頁", url: "/" },
    { id: "chinese", icon: <FaBook />, name: "國文課", url: "/normal" },
    { id: "booking", icon: <HiLightningBolt />, name: "立即體驗", url: "" },
    { id: "composition", icon: <FaBookReader />, name: "作文課", url: "" },
    {
      id: "contact",
      icon: <HiChatBubbleBottomCenterText />,
      name: "LINE@",
      url: "https://lin.ee/2UoO3Q2",
    },
  ];

  const [active, setActive] = useState("home");

  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") {
      setActive("home");
    } else if (pathname === "/normal") {
      setActive("chinese");
    }
  }, [pathname]);

  return (
    <section>
      <ul className={styles.menu}>
        {options.map((e) => (
          <li className={styles.menu__option} key={e.id}>
            {e.id === "booking" ? (
              <div>
                <div
                  className={`${styles.menu__circle} ${
                    active === e.id ? styles.active : ""
                  }`}
                >
                  {e.icon}
                </div>
                <p>{e.name}</p>
              </div>
            ) : e.id === "contact" ? (
              <a href={e.url} target="_blank" rel="noreferrer">
                <div
                  className={`${styles.menu__circle} ${
                    active === e.id ? styles.active : ""
                  }`}
                >
                  {e.icon}
                </div>
                <p>{e.name}</p>
              </a>
            ) : (
              <Link href={e.url}>
                <div
                  className={`${styles.menu__circle} ${
                    active === e.id ? styles.active : ""
                  }`}
                >
                  {e.icon}
                </div>
                <p>{e.name}</p>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
