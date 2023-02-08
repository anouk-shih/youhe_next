import NormalPay from "@/components/Normal/NormalPay";
import ReadCourse from "@/components/Read/ReadCourse";
import ReadKV from "@/components/Read/ReadKV";
import ReadQA from "@/components/Read/ReadQA";

export default function readNWrite() {
  return (
    <main>
      <ReadKV />
      <ReadCourse />
      <ReadQA />
      <NormalPay />
    </main>
  );
}
