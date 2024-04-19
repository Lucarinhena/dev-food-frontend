import Head from "next/head";
import { FormEvent, useState } from "react";
import Image from "next/image";
import logoImg from "../../public/devFood.png";
import Input from "@/components/ui/Input";
import { useContext } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { AuthContext } from "@/contexts/AuthContext";

export default function Home() {
  const { signIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    let data = {
      email: "logih@example.com",
      password: "1234",
    };

    setTimeout(async () => {
      await signIn(data);
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <Head>
        <title>DevFood - Faça seu login!</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo img" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={loading}>
              {loading ? "Entrando..." : "Entrar"}
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
