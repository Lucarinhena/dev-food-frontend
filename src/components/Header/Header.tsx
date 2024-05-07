import { useContext } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { TbLogout } from "react-icons/tb";
import logoImg from "../../../public/devFood.png";
import { AuthContext } from "@/contexts/AuthContext";
export function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image src={logoImg} alt="Logo img" width={190} height={100} />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">
            <p>Categorias</p>
          </Link>

          <Link href="/product">
            <p>Cardápio</p>
          </Link>

          <button onClick={signOut}>
            <TbLogout color="#fff" size={25}/>
          </button>
        </nav>
      </div>
    </header>
  );
}
