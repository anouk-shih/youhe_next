import NormalPay from "@/components/Normal/NormalPay";
import OtherCourse from "@/components/Other/OtherCourse";
import OtherKV from "@/components/Other/OtherKV";

export default function readNWrite() {
  return (
    <main>
      <OtherKV />
      <OtherCourse />
      <NormalPay />
    </main>
  );
}
