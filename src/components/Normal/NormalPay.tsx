import styles from "@/styles/Normal.module.sass";

export default function Pay() {
  return (
    <section className={styles.pay}>
      <div>
        <h4>可支援付款方式：</h4>
        <ul>
          <li>Line Pay</li>
          <li>街口支付</li>
          <li>Pi 拍錢包</li>
          <li>Google Pay</li>
          <li>Samsung Pay</li>
          <li>Apple Pay</li>
          <li>一般信用卡（VISA／MasterCard／JCB／AMEX美國運通／銀聯）</li>
        </ul>
      </div>
      <div>
        <h4>付款流程</h4>
        <ul>
          <li>進入連結</li>
          <li>輸入付款金額</li>
          <li>選擇支付方式</li>
          <li>付款</li>
          <li className="font-bold">
            成功付款後，請記下「訂單編號」或「交易編號」，提供給有禾官方帳號
          </li>
        </ul>
      </div>
      <div>
        <h4>退費相關規定</h4>
        <ul>
          <li>
            於開課日期之前退費，有禾國文將退還您全額（於金流平台直接刷退）。
          </li>
          <li>
            於實際開課日起計算，未達總課程時數之三分之一期間內提出退費申請者，退還當期開班約定繳納費用總額三分之二。（須提供匯款帳號，不得於金流平台刷退）
          </li>
          <li>
            於實際開課日起計算，已達總課程時數之三分之一，但未達總課程時數之二分之一，期間內提出退費申請者，退還當期開班約定繳納費用總額二分之一。（須提供匯款帳號，不得於金流平台刷退）
          </li>
          <li>
            於實際開課日起計算，已經上了總課程時數二分之一以上，後提出退費申請者，所收取之當期開班約定繳納費用得全數不予退還。
          </li>
          <li>
            課程開始後始報名插班者，以課程總金額扣除報名前時數金額，作為繳納費用。
          </li>
          <li>
            課程開始後始報名插班者，以報名後最近一次上課日，作為第一項所定開課日，並以該課程剩餘期間作為總課程時數。
          </li>
          <li>
            若有其他學費外的收費項目，前三項約定繳納費用總額，將不會扣除其金額。
          </li>
          <li>提醒：學生課程時數、堂數或期間等之認定，以雙方約定為準。</li>
        </ul>
      </div>
    </section>
  );
}
