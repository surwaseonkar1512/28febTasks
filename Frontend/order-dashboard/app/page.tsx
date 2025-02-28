import HeaderComponent from "@/components/MainDashBoard/HeaderComponent";
import MainDashBoard from "@/components/MainDashBoard/MainDashBoard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeaderComponent />

      <MainDashBoard />
    </div>
  );
}
