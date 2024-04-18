import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import logoImg from "../../public/devFood.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [changeLoading, setChageLoading] = useState(false)

  const handleChangeLoading = () => {
    setChageLoading(true)
  }
  return (
    <>
      <Head>
        <title>DevFood - Faça seu login!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo img" />
        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={changeLoading} onClick={handleChangeLoading}>
              Entrar
            </Button>
          </form>
          <Link legacyBehavior href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se!</a>
          </Link>
        </div>
      </div>
    </>
  );
}
