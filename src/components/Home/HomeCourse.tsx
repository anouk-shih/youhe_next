import styles from "@/styles/Home.module.sass";
import { useId } from "react";

export default function Course() {
  const chosen = [
    {
      id: useId(),
      title: "半小時體驗課程",
      desc: (
        <div>
          <p>課程內容：升學國文／閱寫課</p>
          <p>適合客群：10-15歲</p>
          <p>課程費用：均一價NT$300</p>
          <p>課程時間：30分鐘</p>
        </div>
      ),
    },
    {
      id: useId(),
      title: "111-2 國小閱寫班 ",
      desc: (
        <div>
          <p className="font-bold">孩子們不會寫作，原因往往有二：</p>
          <p className="font-bold">
            一是因為他們想得太快、想得太多，故一時之間難以下筆完整表述；
          </p>
          <p className="font-bold">二是他們擔心自己的東西不符合大人的期待。</p>
          <p>
            有感於學生的作文課體驗往往單調乏味，且不習慣以書寫方式作為表達自己的方式，小麥老師希望可以建立一種「以互動為根本」的寫作課程。而寫作往往需要搭配閱讀的輸入，故我們不叫做「作文班」，而是「閱寫班」。希望透過閱讀的輸入，以及自己想法的輸出，讓孩子在課堂上漸漸習慣使用寫作來表達自己的所思所聞。
          </p>
          <p>適合客群：國小中年級</p>
          <p>課程費用：NT$960/堂 起</p>
          <p>課程時間：90分鐘/堂</p>
        </div>
      ),
    },
    {
      id: useId(),
      title: "升私中課程",
      desc: (
        <div>
          <p>課程內容：升學國文</p>
          <p>適合客群：國小高年級</p>
          <p>課程費用：NT$670/堂 起</p>
          <p>課程時間：60分鐘/堂</p>
        </div>
      ),
    },
  ];
  return (
    <section className={styles.course}>
      <div className={styles.course__container}>
        <h3>精選課程</h3>
        <ul>
          {chosen.map((e) => (
            <div className={styles.course__card} key={e.id}>
              <h6>{e.title}</h6>
              {e.desc}
              <button className="btn" type="button">
                立即
                <br />
                報名
              </button>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
