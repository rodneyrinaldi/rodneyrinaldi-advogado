import Image from "next/image";
import Home from "../components/pets"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
      <Home />
    )
}