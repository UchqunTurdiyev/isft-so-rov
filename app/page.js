import Image from "next/image";
import FormPage from "./component/gptForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <FormPage  />
    </div>
  );
}
