import NormalCourse from "@/components/Normal/NormalCourse";
import NormalKV from "@/components/Normal/NormalKV";
import NormalPay from "@/components/Normal/NormalPay";
import NormalQA from "@/components/Normal/NormalQA";

export default function normal() {
  return (
    <main>
      <NormalKV />
      <NormalCourse />
      <NormalQA />
      <NormalPay />
    </main>
  );
}
