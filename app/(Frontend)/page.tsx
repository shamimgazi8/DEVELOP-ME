import Home from "@/modules/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raintor",
  keywords: "developer",
  description:
    "We specialize in delivering cutting-edge digital solutions that transform businesses",
};

export default function HomePage() {
  return (
    <div>
      <Home />
    </div>
  );
}
