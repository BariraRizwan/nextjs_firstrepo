import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <div className="navbar">

      <div className="navitems logo">Logo</div>
      <div className="navitems subitems">
        <Link href="./">Home</Link>
        <Link href="./about" target="_blank">About</Link>
        <Link href="./contact" target="_blank">Contact</Link>
        <Link href="./services" target="_blank">Services</Link>

      </div>
    </div>
    </div>
  );
}
