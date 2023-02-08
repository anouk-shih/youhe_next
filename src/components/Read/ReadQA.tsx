import styles from "@/styles/Normal.module.sass";

export default function QA() {
  return (
    <section className={styles.qa}>
      <div>
        <h4>我該買多少課堂？</h4>
        <ul>
          <li>
            有禾國文的閱寫課都是以15堂課／5堂課為一期購買。當一期結束後，我們會再規劃新的課程，也會詢問舊生的續課意願。
          </li>
        </ul>
      </div>
      <div>
        <h4>注意事項</h4>
        <p>有禾的計費方案，是以 「購買課時」 來計算。</p>
        <p>單人國語文、私人包班可一週一次／二次。</p>
        <p className="ml-4">
          若您購買二十堂常態國語文課程，一週上一次課，則一次課程包使用二十週。
        </p>
        <p className="ml-4">
          若您購買二十堂常態國語文課程，一週上兩次課，則一次課程包使用十週。
        </p>
        <p>主題式團班、閱寫班原則上皆為一週一次，直接按照人數購買課程即可。</p>
      </div>
    </section>
  );
}
