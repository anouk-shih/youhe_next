import Image from "next/image";
import styles from "@/styles/layout.module.sass";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LogoBar() {
  const options = [
    { id: "home", name: "首頁", url: "/" },
    { id: "chinese", name: "國文課", url: "/normal" },
    {
      id: "composition",
      name: "作文課",
      url: "/readnwrite",
    },
    { id: "booking", name: "立即體驗", url: "" },
    {
      id: "contact",
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
    } else if (pathname === "/readnwrite") {
      setActive("composition");
    } else {
      setActive("");
    }
  }, [pathname]);

  return (
    <section className={styles.bar}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.svg" alt="有禾國文" width={80} height={80} priority />
        <h1 className="pb-3 text-2xl font-bold tracking-widest">有禾國文</h1>
      </Link>
      <ul className={styles.bar__menu}>
        {options.map((e) => (
          <li key={e.id} className={`${active === e.id ? styles.active : ""}`}>
            {e.id === "contact" ? (
              <a href={e.url} target="_blank" rel="noreferrer">
                {e.name}
              </a>
            ) : (
              <Link href={e.url}>{e.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
